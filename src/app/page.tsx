import {PageHeader} from '@/components/page-header';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Calculator,
  TrendingUp,
  ChevronRight,
  CircleOff,
  Waves,
  Globe,
  Hammer,
  AlertTriangle,
  Terminal,
  PenTool,
  LineChart,
  Settings2,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const coreSystems = [
  {
    title: 'ArithmaGen Console',
    description: 'Terminal for rapid calculus & SPCS.',
    icon: <Terminal className="h-6 w-6 text-blue-400" />,
    href: '/calculators/arithma-console',
    color: 'border-blue-500/20 bg-blue-500/5',
  },
  {
    title: 'Arithma-Sketch',
    description: 'Real-time field drafting & plotting.',
    icon: <PenTool className="h-6 w-6 text-amber-400" />,
    href: '/arithma-sketch',
    color: 'border-amber-500/20 bg-amber-500/5',
  },
  {
    title: 'Interactive Labs',
    description: 'Visual function & intersection engine.',
    icon: <LineChart className="h-6 w-6 text-primary" />,
    href: '/calculators/interactive-demo',
    color: 'border-primary/20 bg-primary/5',
  },
];

const features = [
  {
    title: 'Horizontal',
    description: 'Fundamental COGO routines.',
    icon: <Calculator className="mb-2 h-8 w-8 text-primary" />,
    tools: [
      { name: 'Inverse', href: '/calculators/geometry' },
      { name: 'Sideshot', href: '/calculators/geometry/sideshot' },
      { name: 'Resection (LS)', href: '/calculators/resection' },
      { name: 'Intersections', href: '/calculators/geometry/intersections' },
      { name: 'Loop Closure', href: '/calculators/geometry/loop-closure' },
      { name: 'Area', href: '/calculators/geometry/area-by-coordinates' },
    ]
  },
  {
    title: 'Vertical',
    description: 'Elevation & profile curves.',
    icon: <TrendingUp className="mb-2 h-8 w-8 text-primary" />,
    tools: [
      { name: 'Level Notes', href: '/calculators/geometry/level-notes' },
      { name: 'Slope to Horiz', href: '/calculators/vertical/slope-to-horizontal' },
      { name: 'Vertical Curve', href: '/calculators/vertical/vertical-curve' },
    ]
  },
  {
    title: 'Curves',
    description: 'Compound & spiral systems.',
    icon: <CircleOff className="mb-2 h-8 w-8 text-primary" />,
    tools: [
        { name: 'Horizontal Curve', href: '/calculators/geometry/curve' },
        { name: 'Compound Curve', href: '/calculators/curves/compound-curve' },
        { name: 'Spiral Curve', href: '/calculators/curves/spiral-curve' },
    ]
  },
  {
    title: 'Stakeout',
    description: 'Design to field reports.',
    icon: <Hammer className="mb-2 h-8 w-8 text-primary" />,
    tools: [
      { name: 'Slope Staking', href: '/calculators/stakeout/slope-staking' },
      { name: 'Curve Staking', href: '/calculators/stakeout/curve-staking' },
      { name: 'Building Corners', href: '/calculators/stakeout/building-corners' },
      { name: 'Point Offset', href: '/calculators/geometry/point-offset' },
    ],
  },
  {
    title: 'Coordinates',
    description: 'Transformations & SPCS.',
    icon: <Globe className="mb-2 h-8 w-8 text-primary" />,
    tools: [
      { name: 'Transformations', href: '/calculators/transformation' },
      { name: 'SPCS Converter', href: '/calculators/geodetic/spcs-converter' },
      { name: 'Combined Factor', href: '/calculators/geodetic/combined-factor' },
    ],
  },
  {
    title: 'Storm Water',
    description: 'Hydraulic/Hydrologic tools.',
    icon: <Waves className="mb-2 h-8 w-8 text-primary" />,
    tools: [
      { name: 'Rational Method', href: '/calculators/storm-water' },
      { name: "Manning's Eq", href: '/calculators/storm-water/mannings-equation' },
      { name: 'NRCS Curve Num', href: '/calculators/storm-water/nrcs-curve-number' },
      { name: 'Orifice Eq', href: '/calculators/storm-water/orifice-equation' },
    ]
  },
  {
    title: 'General',
    description: 'AI & historical tools.',
    icon: <Settings2 className="mb-2 h-8 w-8 text-primary" />,
    tools: [
      { name: 'Unit Converter', href: '/calculators/tools/unit-converter' },
      { name: 'Derivative', href: '/calculators/algebra/derivative' },
      { name: 'Integral', href: '/calculators/algebra/integral' },
      { name: 'Factoring', href: '/calculators/algebra/factor-polynomial' },
    ]
  },
];

export default function DashboardPage() {
  return (
    <div className="h-full overflow-y-auto bg-background p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="flex flex-col items-center gap-4 text-center">
          <PageHeader
            title="ArithmaGen Mission Control"
            description="Precision toolkit for high-density surveying and engineering analysis."
          />
          <Alert className="max-w-xl border-amber-500/20 bg-amber-500/5 text-amber-900 dark:text-amber-200">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="font-bold uppercase tracking-widest text-xs">Disclaimer</AlertTitle>
            <AlertDescription className="text-sm opacity-90 dark:opacity-80 font-medium">
              This is an educational tool. All calculations should be verified by a licensed professional before use in legal or construction documents.
            </AlertDescription>
          </Alert>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/50 ml-1">Core Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {coreSystems.map((sys) => (
              <div key={sys.title} className="relative group">
                <Link href={sys.href} className="block h-full">
                  <Card className={cn("h-full transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:shadow-lg", sys.color)}>
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
                      <div className="p-2 rounded bg-background/40 border border-white/10 group-hover:border-primary/30">
                        {sys.icon}
                      </div>
                      <div className="pr-8">
                        <CardTitle className="text-sm font-black uppercase tracking-widest">{sys.title}</CardTitle>
                        <CardDescription className="text-xs mt-1 font-medium opacity-70">{sys.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
                <a 
                  href={sys.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-1.5 rounded-md hover:bg-white/10 text-muted-foreground hover:text-primary transition-colors z-10"
                  title="Open in new window"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 pb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/50 ml-1">Specialized Toolkit</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(feature => (
              <Card key={feature.title} className="flex flex-col border-slate-800/50 bg-slate-950/20 hover:bg-slate-950/40 transition-all duration-300">
                <CardHeader className="p-4 pb-2">
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-sm font-black uppercase tracking-widest">{feature.title}</CardTitle>
                  <CardDescription className="text-xs mt-1 font-medium opacity-60">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col mt-auto gap-1 p-4 pt-0">
                    {feature.tools.map((tool) => (
                        <Button key={tool.href} asChild variant="ghost" className="justify-start h-8 px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-blue-400 hover:bg-blue-500/5 transition-all group/btn">
                          <Link href={tool.href}>
                            {tool.name}
                            <ChevronRight className="ml-auto h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
                          </Link>
                        </Button>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
