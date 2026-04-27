'use server';
/**
 * @fileOverview ArithmaGen Genkit Registry
 * 
 * Central hub for all AI-powered analytical flows including:
 * - Symbolic Calculus (Derivatives/Integrals)
 * - Polynomial Factoring
 * - Least Squares Adjustments
 * - Geometric Circle Fitting
 * - Tolerance Standard Suggestions
 */

import { genkit, z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// Initialize Genkit with the specified 3.1 Flash Preview architecture.
export const ai = genkit({
  plugins: [googleAI()],
  model: googleAI.model('gemini-3.1-flash-preview'),
});

// Import Input/Output Schemas
import { CalculateDerivativeInputSchema, CalculateDerivativeOutputSchema } from './schemas/calculate-derivative-schema';
import { CalculateIntegralInputSchema, CalculateIntegralOutputSchema } from './schemas/calculate-integral-schema';
import { FactorPolynomialInputSchema, FactorPolynomialOutputSchema } from './schemas/factor-polynomial-schema';
import { LeastSquaresAdjustmentInputSchema, LeastSquaresAdjustmentOutputSchema } from './schemas/least-squares-adjustment-schema';
import { ResectionAdjustmentInputSchema, ResectionAdjustmentOutputSchema } from './schemas/resection-adjustment-schema';
import { SuggestToleranceStandardInputSchema, SuggestToleranceStandardOutputSchema } from './schemas/suggest-tolerance-standard-schema';
import { CircleFitInputSchema, CircleFitOutputSchema } from './schemas/circle-fit-schema';

// --- PROMPT DEFINITIONS ---

const calculateDerivativePrompt = ai.definePrompt({
  name: 'calculateDerivativePrompt',
  input: { schema: CalculateDerivativeInputSchema },
  output: { schema: CalculateDerivativeOutputSchema },
  prompt: `You are a high-precision calculus engine.
Calculate the derivative of the following expression with respect to the variable '{{{variable}}}'.
Provide the raw derivative, a simplified form, and the LaTeX representation.

Expression: {{{expression}}}`,
});

const calculateIntegralPrompt = ai.definePrompt({
  name: 'calculateIntegralPrompt',
  input: { schema: CalculateIntegralInputSchema },
  output: { schema: CalculateIntegralOutputSchema },
  prompt: `You are a high-precision calculus engine.
Perform the integration of the following expression. 
{{#if lowerBound}}This is a definite integral from {{{lowerBound}}} to {{{upperBound}}}.{{else}}This is an indefinite integral; remember to include the constant of integration C.{{/if}}

Expression: {{{expression}}}
Variable: {{{variable}}}`,
});

const factorPolynomialPrompt = ai.definePrompt({
  name: 'factorPolynomialPrompt',
  input: { schema: FactorPolynomialInputSchema },
  output: { schema: FactorPolynomialOutputSchema },
  prompt: `You are an expert algebraist.
Factor the following polynomial expression completely and identify all its roots.

Expression: {{{expression}}}`,
});

const leastSquaresAdjustmentPrompt = ai.definePrompt({
  name: 'leastSquaresAdjustmentPrompt',
  input: { schema: LeastSquaresAdjustmentInputSchema },
  output: { schema: LeastSquaresAdjustmentOutputSchema },
  prompt: `You are a rigorous geodetic adjustment engine.
Perform a Least Squares Adjustment on the following traverse loop.
Start Point: N {{{startPoint.y}}}, E {{{startPoint.x}}}
Legs:
{{#each legs}}
- Bearing: {{{bearing}}}°, Distance: {{{distance}}}
{{/each}}

Calculate the adjusted coordinates and provide a summary of the precision and misclosure.`,
});

const resectionAdjustmentPrompt = ai.definePrompt({
  name: 'resectionAdjustmentPrompt',
  input: { schema: ResectionAdjustmentInputSchema },
  output: { schema: ResectionAdjustmentOutputSchema },
  prompt: `You are a precision surveying analyst.
Perform a Least Squares Resection to find the coordinates of an unknown station.
Known Points:
{{#each knownPoints}}
- {{{name}}}: ({{{y}}}, {{{x}}})
{{/each}}

Observations:
{{#each observations}}
- To {{{to}}}: {{#if angle}}Angle {{{angle}}}°{{/if}}{{#if distance}}, Distance {{{distance}}}{{/if}}
{{/each}}`,
});

const suggestToleranceStandardPrompt = ai.definePrompt({
  name: 'suggestToleranceStandardPrompt',
  input: { schema: SuggestToleranceStandardInputSchema },
  output: { schema: SuggestToleranceStandardOutputSchema },
  prompt: `You are a professional land surveying consultant.
Suggest an appropriate tolerance standard and accuracy requirement for the following project.

Survey Type: {{{surveyType}}}
Terrain: {{{terrain}}}
{{#if accuracyRequirements}}Requirements: {{{accuracyRequirements}}}{{/if}}`,
});

const circleFitPrompt = ai.definePrompt({
  name: 'circleFitPrompt',
  input: { schema: CircleFitInputSchema },
  output: { schema: CircleFitOutputSchema },
  prompt: `You are a precision geometric analyst.
Calculate the "Best Fit" circle for the following set of coordinates using a rigorous Least Squares approach.

Points:
{{#each points}}
- {{#if id}}{{{id}}}: {{/if}}({{{x}}}, {{{y}}})
{{/each}}

Output the center coordinates, the radius, the RMSE (Root Mean Square Error), and perform a residual analysis for each point to identify potential blunders (outliers).`,
});

// --- FLOW EXPORTS ---

export const calculateDerivative = ai.defineFlow(
  { name: 'calculateDerivative', inputSchema: CalculateDerivativeInputSchema, outputSchema: CalculateDerivativeOutputSchema },
  async (input) => {
    const { output } = await calculateDerivativePrompt(input);
    return output!;
  }
);

export const calculateIntegral = ai.defineFlow(
  { name: 'calculateIntegral', inputSchema: CalculateIntegralInputSchema, outputSchema: CalculateIntegralOutputSchema },
  async (input) => {
    const { output } = await calculateIntegralPrompt(input);
    return output!;
  }
);

export const factorPolynomial = ai.defineFlow(
  { name: 'factorPolynomial', inputSchema: FactorPolynomialInputSchema, outputSchema: FactorPolynomialOutputSchema },
  async (input) => {
    const { output } = await factorPolynomialPrompt(input);
    return output!;
  }
);

export const adjustTraverseLeastSquares = ai.defineFlow(
  { name: 'adjustTraverseLeastSquares', inputSchema: LeastSquaresAdjustmentInputSchema, outputSchema: LeastSquaresAdjustmentOutputSchema },
  async (input) => {
    const { output } = await leastSquaresAdjustmentPrompt(input);
    return output!;
  }
);

export const adjustResectionLeastSquares = ai.defineFlow(
  { name: 'adjustResectionLeastSquares', inputSchema: ResectionAdjustmentInputSchema, outputSchema: ResectionAdjustmentOutputSchema },
  async (input) => {
    const { output } = await resectionAdjustmentPrompt(input);
    return output!;
  }
);

export const suggestToleranceStandard = ai.defineFlow(
  { name: 'suggestToleranceStandard', inputSchema: SuggestToleranceStandardInputSchema, outputSchema: SuggestToleranceStandardOutputSchema },
  async (input) => {
    const { output } = await suggestToleranceStandardPrompt(input);
    return output!;
  }
);

export const runCircleFit = ai.defineFlow(
  { name: 'runCircleFit', inputSchema: CircleFitInputSchema, outputSchema: CircleFitOutputSchema },
  async (input) => {
    const { output } = await circleFitPrompt(input);
    return output!;
  }
);
