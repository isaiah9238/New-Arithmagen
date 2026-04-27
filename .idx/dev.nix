{ pkgs, ... }: {
  channel = "stable-25.05"; 

  packages = [
    pkgs.nodejs_22                # <--- Update this from 20 to 22
    pkgs.nodePackages.firebase-tools
    pkgs.psmisc
    pkgs.sudo
    pkgs.jdk21
    pkgs.nano
  ];

  env = {
    FUNCTIONS_DISCOVERY_TIMEOUT = "60"; 
    # Adding this helps Next.js recognize the Cloud Workstation environment
    NEXT_TELEMETRY_DISABLED = "1";
  };
  
  idx = {
    extensions = [
      "christian-kohler.path-intellisense"
      "dbaeumer.vscode-eslint"
    ];

    previews = {
      enable = true;
      previews = {
        web = {
          # We use --turbo to leverage Next.js 16's speed
          command = [ "npm" "run" "dev" "--" "-p" "$PORT" "-H" "0.0.0.0" "--turbo" ];
          manager = "web";
        };
      };
    };

    workspace = {
      onCreate = {
        npm-install = "npm install";
        default.openFiles = [ "package.json" ];        
      };
      onStart = {
        # This keeps your permissions clean on restart
        repair-sudo = "pkexec chown root:root /usr/bin/sudo && pkexec chmod 4755 /usr/bin/sudo";
      };
    };
  };
}