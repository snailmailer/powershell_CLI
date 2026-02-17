const powershellCommands = [
    // ── File and Directory Management ──
    {
        name: "Get-ChildItem",
        category: "file",
        description: "Lists files and directories in a specified location. The most fundamental command for navigating and exploring the file system.",
        formula: "Get-ChildItem [-Path] <path> [-Recurse] [-Filter <pattern>] [-Force]",
        usage: [
            "View contents of a directory",
            "Search for files recursively across folders",
            "Filter files by extension or pattern",
            "List hidden and system files with -Force"
        ],
        examples: [
            "Get-ChildItem C:\\Users",
            "Get-ChildItem -Path C:\\ -Recurse -Filter *.txt",
            "Get-ChildItem -Path . -Include *.log -Recurse",
            "Get-ChildItem -Force -Hidden"
        ]
    },
    {
        name: "Set-Location",
        category: "file",
        description: "Changes the current working directory to a specified path. Equivalent to 'cd' in traditional command line.",
        formula: "Set-Location [-Path] <path>",
        usage: [
            "Navigate between directories",
            "Change to a specific drive or folder",
            "Navigate to environment variable paths",
            "Return to the previous location with -"
        ],
        examples: [
            "Set-Location C:\\Windows",
            "Set-Location $env:USERPROFILE\\Documents",
            "Set-Location -Path \\\\server\\share",
            "Set-Location -"
        ]
    },
    {
        name: "New-Item",
        category: "file",
        description: "Creates new files, directories, symbolic links, or registry keys. A versatile creation command for multiple item types.",
        formula: "New-Item [-Path] <path> -ItemType <File|Directory> [-Value <content>] [-Force]",
        usage: [
            "Create new files with optional content",
            "Create new directories and nested folder structures",
            "Create symbolic links or junctions",
            "Overwrite existing items with -Force"
        ],
        examples: [
            "New-Item -Path C:\\Temp\\test.txt -ItemType File",
            "New-Item -Path C:\\Projects\\NewFolder -ItemType Directory",
            "New-Item -Path C:\\Temp\\config.json -ItemType File -Value '{}'",
            "New-Item -ItemType SymbolicLink -Path .\\link -Target C:\\Target"
        ]
    },
    {
        name: "Remove-Item",
        category: "file",
        description: "Deletes files, directories, registry keys, and other items. Use with caution as deletions are permanent.",
        formula: "Remove-Item [-Path] <path> [-Recurse] [-Force] [-WhatIf]",
        usage: [
            "Delete files or folders",
            "Recursively remove directory trees",
            "Force remove read-only or protected items",
            "Preview deletions with -WhatIf before executing"
        ],
        examples: [
            "Remove-Item C:\\Temp\\old -Recurse -Force",
            "Remove-Item *.log",
            "Remove-Item -Path C:\\Temp\\* -Include *.tmp",
            "Remove-Item C:\\Data -Recurse -WhatIf"
        ]
    },
    {
        name: "Copy-Item",
        category: "file",
        description: "Copies files and directories from one location to another. Supports recursive copying and filtering.",
        formula: "Copy-Item [-Path] <source> -Destination <dest> [-Recurse] [-Force]",
        usage: [
            "Duplicate files to a new location",
            "Copy entire directory structures recursively",
            "Overwrite destination files with -Force",
            "Copy files matching specific patterns"
        ],
        examples: [
            "Copy-Item C:\\Source\\file.txt C:\\Dest\\",
            "Copy-Item C:\\Source\\* C:\\Dest -Recurse",
            "Copy-Item -Path *.docx -Destination C:\\Backup",
            "Copy-Item C:\\Config -Destination C:\\Backup -Recurse -Force"
        ]
    },
    {
        name: "Move-Item",
        category: "file",
        description: "Moves files and directories to a new location. Can also be used to rename items by moving to the same directory.",
        formula: "Move-Item [-Path] <source> -Destination <dest> [-Force]",
        usage: [
            "Relocate files between directories",
            "Move and rename files simultaneously",
            "Move directory trees to new locations",
            "Force overwrite at destination"
        ],
        examples: [
            "Move-Item C:\\Old\\file.txt C:\\New\\",
            "Move-Item -Path *.log -Destination C:\\Archive",
            "Move-Item C:\\Projects\\v1 C:\\Archive\\v1",
            "Move-Item C:\\Data\\temp.csv C:\\Data\\final.csv"
        ]
    },
    {
        name: "Rename-Item",
        category: "file",
        description: "Renames a file, directory, or other item. Only changes the name, not the location.",
        formula: "Rename-Item [-Path] <path> -NewName <name>",
        usage: [
            "Rename individual files or folders",
            "Change file extensions",
            "Bulk rename with pipeline input",
            "Rename registry keys"
        ],
        examples: [
            "Rename-Item C:\\file.txt -NewName newfile.txt",
            "Rename-Item C:\\OldFolder -NewName NewFolder",
            "Get-ChildItem *.txt | Rename-Item -NewName { $_.Name -replace '.txt','.bak' }",
            "Rename-Item report_draft.docx -NewName report_final.docx"
        ]
    },
    {
        name: "Test-Path",
        category: "file",
        description: "Tests whether a path exists. Returns True or False. Essential for conditional logic in scripts.",
        formula: "Test-Path [-Path] <path> [-PathType <Leaf|Container|Any>]",
        usage: [
            "Check if a file or folder exists before operating on it",
            "Validate paths in scripts",
            "Distinguish between files and directories",
            "Test registry key existence"
        ],
        examples: [
            "Test-Path C:\\Windows\\System32",
            "Test-Path C:\\config.json -PathType Leaf",
            "if (Test-Path $filePath) { Get-Content $filePath }",
            "Test-Path HKLM:\\SOFTWARE\\Microsoft"
        ]
    },

    // ── Process Management ──
    {
        name: "Get-Process",
        category: "process",
        description: "Retrieves information about running processes on the local or remote computer, including CPU usage, memory, and process ID.",
        formula: "Get-Process [-Name] <name> [-Id <pid>] [-ComputerName <host>]",
        usage: [
            "List all running processes",
            "Find specific processes by name or PID",
            "Monitor CPU and memory usage",
            "Query processes on remote computers"
        ],
        examples: [
            "Get-Process",
            "Get-Process -Name chrome",
            "Get-Process -Id 1234",
            "Get-Process | Sort-Object CPU -Descending | Select-Object -First 10"
        ]
    },
    {
        name: "Start-Process",
        category: "process",
        description: "Starts one or more processes on the local computer. Can launch applications, scripts, and executables with arguments.",
        formula: "Start-Process [-FilePath] <path> [-ArgumentList <args>] [-Verb RunAs] [-Wait]",
        usage: [
            "Launch applications programmatically",
            "Run processes with elevated privileges (Run as Admin)",
            "Start processes and wait for completion",
            "Open files with their associated application"
        ],
        examples: [
            "Start-Process notepad.exe",
            "Start-Process notepad.exe -ArgumentList C:\\file.txt",
            "Start-Process powershell -Verb RunAs",
            "Start-Process msiexec.exe -ArgumentList '/i setup.msi /quiet' -Wait"
        ]
    },
    {
        name: "Stop-Process",
        category: "process",
        description: "Terminates one or more running processes. Use -Force for processes that don't respond to normal stop requests.",
        formula: "Stop-Process [-Name] <name> [-Id <pid>] [-Force] [-Confirm]",
        usage: [
            "Kill unresponsive applications",
            "Stop processes by name or process ID",
            "Force terminate stubborn processes",
            "Stop multiple processes at once"
        ],
        examples: [
            "Stop-Process -Name notepad",
            "Stop-Process -Id 1234 -Force",
            "Get-Process chrome | Stop-Process",
            "Stop-Process -Name node -Force -Confirm"
        ]
    },
    {
        name: "Wait-Process",
        category: "process",
        description: "Waits for a process to stop before accepting more input. Used for synchronization in scripts.",
        formula: "Wait-Process [-Name] <name> [-Id <pid>] [-Timeout <seconds>]",
        usage: [
            "Wait for an installer to finish",
            "Synchronize script execution with process completion",
            "Set timeout limits for process waits",
            "Coordinate dependent process sequences"
        ],
        examples: [
            "Wait-Process -Name setup",
            "Wait-Process -Id 5678 -Timeout 120",
            "Start-Process msiexec -Wait",
            "Wait-Process -Name notepad -Timeout 30"
        ]
    },

    // ── Service Management ──
    {
        name: "Get-Service",
        category: "service",
        description: "Retrieves the status of services on the local or remote computer. Shows running, stopped, and paused services.",
        formula: "Get-Service [-Name] <name> [-DisplayName <display>] [-ComputerName <host>]",
        usage: [
            "Check the status of Windows services",
            "List all services and their state",
            "Find services by display name pattern",
            "Query services on remote machines"
        ],
        examples: [
            "Get-Service",
            "Get-Service -Name wuauserv",
            "Get-Service -DisplayName '*Windows*'",
            "Get-Service | Where-Object Status -eq 'Running'"
        ]
    },
    {
        name: "Start-Service",
        category: "service",
        description: "Starts one or more stopped services. Requires administrative privileges for most services.",
        formula: "Start-Service [-Name] <name> [-PassThru]",
        usage: [
            "Start a stopped Windows service",
            "Restart services after configuration changes",
            "Enable services during deployment scripts",
            "Start dependent services automatically"
        ],
        examples: [
            "Start-Service -Name Spooler",
            "Start-Service -Name wuauserv -PassThru",
            "Get-Service -Name BITS | Start-Service",
            "Start-Service -DisplayName 'Windows Update'"
        ]
    },
    {
        name: "Stop-Service",
        category: "service",
        description: "Stops one or more running services. Can force stop services with dependent services.",
        formula: "Stop-Service [-Name] <name> [-Force] [-NoWait]",
        usage: [
            "Stop a running Windows service",
            "Force stop services with dependencies",
            "Gracefully shut down services during maintenance",
            "Issue stop without waiting for completion"
        ],
        examples: [
            "Stop-Service -Name Spooler",
            "Stop-Service -Name wuauserv -Force",
            "Get-Service -Name BITS | Stop-Service",
            "Stop-Service -DisplayName 'Print Spooler' -Force"
        ]
    },
    {
        name: "Restart-Service",
        category: "service",
        description: "Stops and then starts a service. Useful when services need to reload configuration.",
        formula: "Restart-Service [-Name] <name> [-Force]",
        usage: [
            "Restart a service to apply configuration changes",
            "Recover from service faults",
            "Cycle services during deployment",
            "Force restart services with dependents"
        ],
        examples: [
            "Restart-Service -Name wuauserv",
            "Restart-Service -Name IISAdmin -Force",
            "Get-Service -Name Spooler | Restart-Service",
            "Restart-Service -DisplayName 'DNS Client'"
        ]
    },
    {
        name: "Set-Service",
        category: "service",
        description: "Modifies properties of a service, such as startup type, description, or display name.",
        formula: "Set-Service -Name <name> -StartupType <Automatic|Manual|Disabled> [-Description <text>]",
        usage: [
            "Change service startup type",
            "Disable unnecessary services",
            "Enable services to start automatically",
            "Update service descriptions"
        ],
        examples: [
            "Set-Service -Name Spooler -StartupType Automatic",
            "Set-Service -Name wuauserv -StartupType Disabled",
            "Set-Service -Name MyService -Description 'Custom service'",
            "Set-Service -Name BITS -StartupType Manual"
        ]
    },

    // ── Network Commands ──
    {
        name: "Test-Connection",
        category: "network",
        description: "Sends ICMP echo requests (pings) to remote computers. Tests basic network connectivity.",
        formula: "Test-Connection [-ComputerName] <host> [-Count <n>] [-Quiet]",
        usage: [
            "Test if a remote host is reachable",
            "Measure network latency",
            "Perform quick connectivity checks in scripts",
            "Ping multiple hosts simultaneously"
        ],
        examples: [
            "Test-Connection google.com",
            "Test-Connection 192.168.1.1 -Count 4",
            "Test-Connection server01 -Quiet",
            "Test-Connection google.com, 8.8.8.8"
        ]
    },
    {
        name: "Get-NetIPAddress",
        category: "network",
        description: "Displays IP address configuration for all network interfaces on the computer.",
        formula: "Get-NetIPAddress [-InterfaceAlias <name>] [-AddressFamily <IPv4|IPv6>]",
        usage: [
            "View IP addresses assigned to adapters",
            "Filter by IPv4 or IPv6 addresses",
            "Check interface-specific configuration",
            "Troubleshoot network configuration issues"
        ],
        examples: [
            "Get-NetIPAddress",
            "Get-NetIPAddress -AddressFamily IPv4",
            "Get-NetIPAddress -InterfaceAlias Ethernet",
            "Get-NetIPAddress | Where-Object IPAddress -like '192.168.*'"
        ]
    },
    {
        name: "Test-NetConnection",
        category: "network",
        description: "Performs diagnostic network connectivity tests including TCP port checks, route tracing, and DNS resolution.",
        formula: "Test-NetConnection [-ComputerName] <host> [-Port <port>] [-TraceRoute]",
        usage: [
            "Test if a specific TCP port is open on a remote host",
            "Diagnose connectivity and firewall issues",
            "Trace the route to a destination",
            "Verify web/database server accessibility"
        ],
        examples: [
            "Test-NetConnection google.com -Port 443",
            "Test-NetConnection server01 -Port 3389",
            "Test-NetConnection 8.8.8.8 -TraceRoute",
            "Test-NetConnection db.company.com -Port 1433"
        ]
    },
    {
        name: "Resolve-DnsName",
        category: "network",
        description: "Performs DNS name resolution queries. Replaces nslookup with native PowerShell cmdlet functionality.",
        formula: "Resolve-DnsName [-Name] <domain> [-Type <A|AAAA|MX|CNAME|NS|TXT>]",
        usage: [
            "Look up IP addresses for domain names",
            "Query specific DNS record types",
            "Troubleshoot DNS resolution problems",
            "Verify DNS configuration"
        ],
        examples: [
            "Resolve-DnsName www.google.com",
            "Resolve-DnsName company.com -Type MX",
            "Resolve-DnsName example.com -Type TXT",
            "Resolve-DnsName myserver.local -Type A"
        ]
    },
    {
        name: "Get-NetAdapter",
        category: "network",
        description: "Gets the basic network adapter properties. Shows physical and virtual network interfaces.",
        formula: "Get-NetAdapter [-Name <name>] [-Physical]",
        usage: [
            "List all network adapters",
            "Check adapter link speed and status",
            "Find physical vs virtual adapters",
            "Troubleshoot network interface issues"
        ],
        examples: [
            "Get-NetAdapter",
            "Get-NetAdapter -Name Wi-Fi",
            "Get-NetAdapter -Physical",
            "Get-NetAdapter | Where-Object Status -eq 'Up'"
        ]
    },

    // ── System Information ──
    {
        name: "Get-ComputerInfo",
        category: "system",
        description: "Retrieves a comprehensive set of system and operating system properties from the computer.",
        formula: "Get-ComputerInfo [-Property <property-list>]",
        usage: [
            "Gather detailed system specifications",
            "Check OS version and build number",
            "Retrieve hardware information",
            "Audit system configuration"
        ],
        examples: [
            "Get-ComputerInfo",
            "Get-ComputerInfo -Property OsName, OsVersion",
            "Get-ComputerInfo | Select-Object CsName, OsArchitecture",
            "(Get-ComputerInfo).WindowsVersion"
        ]
    },
    {
        name: "Get-CimInstance",
        category: "system",
        description: "Queries CIM (Common Information Model) instances for hardware, OS, and software information. Modern replacement for Get-WmiObject.",
        formula: "Get-CimInstance -ClassName <class> [-Filter <filter>] [-ComputerName <host>]",
        usage: [
            "Query hardware details (BIOS, disks, memory)",
            "Get operating system information",
            "Retrieve installed software list",
            "Query system info on remote computers"
        ],
        examples: [
            "Get-CimInstance -ClassName Win32_OperatingSystem",
            "Get-CimInstance -ClassName Win32_BIOS",
            "Get-CimInstance -ClassName Win32_LogicalDisk",
            "Get-CimInstance -ClassName Win32_Processor | Select-Object Name, NumberOfCores"
        ]
    },
    {
        name: "Get-HotFix",
        category: "system",
        description: "Lists installed Windows updates and hotfixes. Useful for compliance and patch management.",
        formula: "Get-HotFix [-Id <KB#>] [-ComputerName <host>]",
        usage: [
            "Check which patches are installed",
            "Verify specific KB update installation",
            "Audit patch compliance",
            "Compare updates across machines"
        ],
        examples: [
            "Get-HotFix",
            "Get-HotFix -Id KB5001234",
            "Get-HotFix | Sort-Object InstalledOn -Descending",
            "Get-HotFix | Select-Object HotFixID, InstalledOn"
        ]
    },
    {
        name: "Get-EventLog",
        category: "system",
        description: "Retrieves events from Windows event logs. Essential for troubleshooting and monitoring system health.",
        formula: "Get-EventLog -LogName <name> [-Newest <n>] [-EntryType <type>]",
        usage: [
            "View system, application, or security log events",
            "Find error and warning events",
            "Get recent log entries for troubleshooting",
            "Search for specific event patterns"
        ],
        examples: [
            "Get-EventLog -LogName System -Newest 10",
            "Get-EventLog -LogName Application -EntryType Error",
            "Get-EventLog -LogName Security -Newest 50",
            "Get-EventLog -LogName System -Source 'Service Control Manager'"
        ]
    },

    // ── User and Security ──
    {
        name: "Get-LocalUser",
        category: "security",
        description: "Lists local user accounts on the computer. Shows account status, description, and last logon.",
        formula: "Get-LocalUser [-Name <name>] [-SID <sid>]",
        usage: [
            "List all local user accounts",
            "Check if a specific user account exists",
            "View account enabled/disabled status",
            "Audit user accounts for security"
        ],
        examples: [
            "Get-LocalUser",
            "Get-LocalUser -Name Administrator",
            "Get-LocalUser | Where-Object Enabled -eq $true",
            "Get-LocalUser | Select-Object Name, Enabled, LastLogon"
        ]
    },
    {
        name: "New-LocalUser",
        category: "security",
        description: "Creates a new local user account. Requires administrative privileges.",
        formula: "New-LocalUser -Name <name> -Password <SecureString> [-Description <text>] [-FullName <name>]",
        usage: [
            "Create new local accounts for users",
            "Set up service accounts",
            "Provision accounts during system setup",
            "Create accounts with specific descriptions"
        ],
        examples: [
            "New-LocalUser -Name 'JohnDoe' -Password (Read-Host -AsSecureString)",
            "New-LocalUser -Name 'svc_app' -Password $secPwd -Description 'App Service Account'",
            "New-LocalUser 'TestUser' -NoPassword",
            "New-LocalUser -Name 'Admin2' -Password $pwd -FullName 'Backup Admin'"
        ]
    },
    {
        name: "Get-ExecutionPolicy",
        category: "security",
        description: "Shows the current PowerShell execution policy that determines which scripts can run.",
        formula: "Get-ExecutionPolicy [-Scope <scope>] [-List]",
        usage: [
            "Check current script execution restrictions",
            "View execution policy for all scopes",
            "Troubleshoot script execution issues",
            "Verify security settings"
        ],
        examples: [
            "Get-ExecutionPolicy",
            "Get-ExecutionPolicy -List",
            "Get-ExecutionPolicy -Scope CurrentUser",
            "Get-ExecutionPolicy -Scope LocalMachine"
        ]
    },
    {
        name: "Set-ExecutionPolicy",
        category: "security",
        description: "Sets the PowerShell execution policy. Controls the level of trust for running scripts.",
        formula: "Set-ExecutionPolicy [-ExecutionPolicy] <Restricted|AllSigned|RemoteSigned|Unrestricted|Bypass> [-Scope <scope>]",
        usage: [
            "Enable script execution on a machine",
            "Restrict scripts to signed-only for security",
            "Set policy per user or machine scope",
            "Temporarily bypass policy for automation"
        ],
        examples: [
            "Set-ExecutionPolicy RemoteSigned",
            "Set-ExecutionPolicy Bypass -Scope Process",
            "Set-ExecutionPolicy AllSigned -Scope LocalMachine",
            "Set-ExecutionPolicy Restricted -Scope CurrentUser"
        ]
    },

    // ── Text and Content Processing ──
    {
        name: "Get-Content",
        category: "content",
        description: "Reads the content of a file, one line at a time. The go-to command for reading text files.",
        formula: "Get-Content [-Path] <path> [-TotalCount <n>] [-Tail <n>] [-Wait]",
        usage: [
            "Read file contents into a variable or pipeline",
            "Read the first N or last N lines of a file",
            "Tail a log file in real-time with -Wait",
            "Read raw bytes for binary file handling"
        ],
        examples: [
            "Get-Content C:\\log.txt",
            "Get-Content C:\\data.csv -TotalCount 10",
            "Get-Content C:\\app.log -Tail 20 -Wait",
            "Get-Content C:\\config.json | ConvertFrom-Json"
        ]
    },
    {
        name: "Set-Content",
        category: "content",
        description: "Writes content to a file, replacing any existing content. Creates the file if it doesn't exist.",
        formula: "Set-Content [-Path] <path> -Value <content> [-Encoding <encoding>]",
        usage: [
            "Write text to a new or existing file",
            "Overwrite file contents completely",
            "Set specific file encoding (UTF-8, ASCII, etc.)",
            "Write pipeline output to a file"
        ],
        examples: [
            "Set-Content C:\\file.txt -Value 'Hello World'",
            "'Line1','Line2' | Set-Content C:\\output.txt",
            "Set-Content C:\\config.txt -Value $configData -Encoding UTF8",
            "Get-Process | Out-String | Set-Content C:\\processes.txt"
        ]
    },
    {
        name: "Add-Content",
        category: "content",
        description: "Appends content to a file without overwriting existing data. Creates the file if it doesn't exist.",
        formula: "Add-Content [-Path] <path> -Value <content> [-Encoding <encoding>]",
        usage: [
            "Append log entries to a file",
            "Add data to existing CSV files",
            "Build files incrementally",
            "Append pipeline output to a file"
        ],
        examples: [
            "Add-Content C:\\log.txt -Value 'New entry'",
            "'Additional data' | Add-Content C:\\data.txt",
            "Add-Content C:\\log.txt -Value \"$(Get-Date): Task completed\"",
            "Get-Process | Out-String | Add-Content C:\\daily_report.txt"
        ]
    },
    {
        name: "Select-String",
        category: "content",
        description: "Searches for text patterns in strings and files using regular expressions. PowerShell equivalent of grep.",
        formula: "Select-String -Path <path> -Pattern <regex> [-CaseSensitive] [-Context <n>]",
        usage: [
            "Search for text patterns in files",
            "Find matches using regular expressions",
            "Search across multiple files recursively",
            "Show context lines around matches"
        ],
        examples: [
            "Select-String -Path *.log -Pattern 'ERROR'",
            "Get-Content C:\\log.txt | Select-String -Pattern 'failed|timeout'",
            "Select-String -Path C:\\*.config -Pattern 'connectionString'",
            "Select-String -Path *.ps1 -Pattern 'TODO' -CaseSensitive"
        ]
    },
    {
        name: "Out-File",
        category: "content",
        description: "Sends output to a file. Preserves the formatting of the output as it would appear in the console.",
        formula: "<command> | Out-File [-FilePath] <path> [-Append] [-Encoding <encoding>]",
        usage: [
            "Save formatted command output to a file",
            "Append output to existing files",
            "Control output encoding",
            "Redirect console output for logging"
        ],
        examples: [
            "Get-Process | Out-File C:\\processes.txt",
            "Get-Service | Out-File C:\\services.txt -Append",
            "Get-EventLog -LogName System -Newest 50 | Out-File C:\\events.txt",
            "systeminfo | Out-File C:\\sysinfo.txt -Encoding UTF8"
        ]
    },

    // ── Pipeline and Filtering ──
    {
        name: "Where-Object",
        category: "pipeline",
        description: "Filters objects in the pipeline based on property values or script block conditions. The primary filtering command.",
        formula: "<command> | Where-Object { <condition> }  OR  <command> | Where-Object <property> -<operator> <value>",
        usage: [
            "Filter results by property values",
            "Apply complex boolean conditions",
            "Chain multiple where clauses",
            "Use comparison operators for precision filtering"
        ],
        examples: [
            "Get-Process | Where-Object { $_.CPU -gt 100 }",
            "Get-Service | Where-Object Status -eq 'Running'",
            "Get-ChildItem | Where-Object { $_.Length -gt 1MB }",
            "Get-EventLog System | Where-Object { $_.EntryType -eq 'Error' -and $_.Source -eq 'Disk' }"
        ]
    },
    {
        name: "Select-Object",
        category: "pipeline",
        description: "Selects specified properties of objects or a set number of objects. Used for choosing columns and limiting results.",
        formula: "<command> | Select-Object [-Property] <props> [-First <n>] [-Last <n>] [-Unique]",
        usage: [
            "Choose specific properties to display",
            "Get the first or last N results",
            "Create calculated properties",
            "Remove duplicate values with -Unique"
        ],
        examples: [
            "Get-Process | Select-Object Name, CPU, Id",
            "Get-Process | Select-Object -First 5",
            "Get-ChildItem | Select-Object Name, Length, LastWriteTime",
            "Get-Service | Select-Object -Property Name, @{Name='State';Expression={$_.Status}}"
        ]
    },
    {
        name: "Sort-Object",
        category: "pipeline",
        description: "Sorts objects by property values in ascending or descending order.",
        formula: "<command> | Sort-Object [-Property] <property> [-Descending] [-Unique]",
        usage: [
            "Order results by one or more properties",
            "Sort in ascending or descending order",
            "Remove duplicates while sorting",
            "Sort by custom expressions"
        ],
        examples: [
            "Get-Process | Sort-Object CPU -Descending",
            "Get-ChildItem | Sort-Object Length -Descending",
            "Get-Service | Sort-Object Status, Name",
            "1,3,2,3,1 | Sort-Object -Unique"
        ]
    },
    {
        name: "ForEach-Object",
        category: "pipeline",
        description: "Performs an operation on each item in a collection of input objects. The main looping construct in the pipeline.",
        formula: "<command> | ForEach-Object { <script-block> }",
        usage: [
            "Execute a script block for each pipeline object",
            "Transform or modify each object",
            "Perform actions on each item in a collection",
            "Process items in parallel (PowerShell 7+)"
        ],
        examples: [
            "Get-ChildItem *.txt | ForEach-Object { $_.Name }",
            "1..10 | ForEach-Object { $_ * 2 }",
            "Get-Service | ForEach-Object { Write-Host \"$($_.Name): $($_.Status)\" }",
            "Get-Process | ForEach-Object { \"$($_.Name) uses $([math]::Round($_.WS/1MB,2)) MB\" }"
        ]
    },
    {
        name: "Measure-Object",
        category: "pipeline",
        description: "Calculates numeric properties of objects including count, sum, average, minimum, and maximum.",
        formula: "<command> | Measure-Object [-Property <prop>] [-Sum] [-Average] [-Maximum] [-Minimum]",
        usage: [
            "Count items in a collection",
            "Calculate sum, average, min, max of numeric properties",
            "Measure character, word, or line counts in text",
            "Generate statistical summaries"
        ],
        examples: [
            "Get-Process | Measure-Object",
            "Get-Process | Measure-Object -Property CPU -Sum -Average",
            "Get-ChildItem | Measure-Object -Property Length -Sum",
            "Get-Content C:\\file.txt | Measure-Object -Line -Word -Character"
        ]
    },
    {
        name: "Group-Object",
        category: "pipeline",
        description: "Groups objects by specified property values. Creates collections of objects sharing common properties.",
        formula: "<command> | Group-Object [-Property] <property> [-NoElement]",
        usage: [
            "Group and count items by category",
            "Analyze distribution of values",
            "Create summary groupings",
            "Categorize data for reporting"
        ],
        examples: [
            "Get-Process | Group-Object Company",
            "Get-Service | Group-Object Status",
            "Get-ChildItem | Group-Object Extension",
            "Get-EventLog System -Newest 100 | Group-Object EntryType"
        ]
    },

    // ── Variables and Objects ──
    {
        name: "Get-Variable",
        category: "variable",
        description: "Gets the variables defined in the current scope. Shows variable names, values, and types.",
        formula: "Get-Variable [-Name] <name> [-Scope <scope>]",
        usage: [
            "List all defined variables",
            "Check a variable's current value",
            "View automatic and preference variables",
            "Debug variable state in scripts"
        ],
        examples: [
            "Get-Variable",
            "Get-Variable -Name PSVersionTable",
            "Get-Variable -Name Error*",
            "Get-Variable -Scope Global"
        ]
    },
    {
        name: "Set-Variable",
        category: "variable",
        description: "Creates or modifies a variable. Can set value, scope, visibility, and read-only attributes.",
        formula: "Set-Variable -Name <name> -Value <value> [-Scope <scope>] [-Option <ReadOnly|Constant>]",
        usage: [
            "Create variables with specific options",
            "Set read-only or constant variables",
            "Define variables in specific scopes",
            "Store configuration values"
        ],
        examples: [
            "Set-Variable -Name myVar -Value 100",
            "Set-Variable -Name config -Value @{Server='localhost';Port=8080}",
            "Set-Variable -Name API_KEY -Value 'abc123' -Option ReadOnly",
            "Set-Variable -Name counter -Value 0 -Scope Script"
        ]
    },
    {
        name: "Get-Member",
        category: "variable",
        description: "Displays the properties and methods of objects. Essential for discovering what you can do with any object.",
        formula: "<object> | Get-Member [-MemberType <type>] [-Force]",
        usage: [
            "Explore available properties and methods of an object",
            "Discover object types in the pipeline",
            "Find specific member types (Method, Property, etc.)",
            "Learn the structure of unfamiliar objects"
        ],
        examples: [
            "Get-Process | Get-Member",
            "Get-Service | Get-Member -MemberType Property",
            "'Hello World' | Get-Member",
            "Get-Date | Get-Member -MemberType Method"
        ]
    },

    // ── Module Management ──
    {
        name: "Get-Module",
        category: "module",
        description: "Lists modules that are imported or available to import in the current session.",
        formula: "Get-Module [-Name <name>] [-ListAvailable]",
        usage: [
            "See currently loaded modules",
            "Discover available modules on the system",
            "Check module version information",
            "Verify module installation"
        ],
        examples: [
            "Get-Module",
            "Get-Module -ListAvailable",
            "Get-Module -Name PSReadLine",
            "Get-Module -ListAvailable -Name Az.*"
        ]
    },
    {
        name: "Install-Module",
        category: "module",
        description: "Downloads and installs modules from the PowerShell Gallery or other registered repositories.",
        formula: "Install-Module [-Name] <name> [-Scope <CurrentUser|AllUsers>] [-Force]",
        usage: [
            "Install modules from PowerShell Gallery",
            "Add new functionality to PowerShell",
            "Install for current user only or all users",
            "Update to newer module versions"
        ],
        examples: [
            "Install-Module -Name Az -Scope CurrentUser",
            "Install-Module -Name Pester -Force",
            "Install-Module -Name ImportExcel",
            "Install-Module -Name PSScriptAnalyzer -Scope AllUsers"
        ]
    },
    {
        name: "Import-Module",
        category: "module",
        description: "Adds modules to the current session, making their commands available for use.",
        formula: "Import-Module [-Name] <name> [-Force] [-PassThru]",
        usage: [
            "Load a module into the current session",
            "Force reload a module after changes",
            "Import modules from custom paths",
            "Make cmdlets available for use"
        ],
        examples: [
            "Import-Module ActiveDirectory",
            "Import-Module C:\\Modules\\MyModule.psm1",
            "Import-Module -Name Az.Compute -Force",
            "Import-Module PSReadLine -PassThru"
        ]
    },

    // ── Help and Documentation ──
    {
        name: "Get-Help",
        category: "help",
        description: "Displays help information about PowerShell commands, concepts, and syntax. Your best friend for learning commands.",
        formula: "Get-Help <command> [-Examples] [-Full] [-Online]",
        usage: [
            "Learn how to use any PowerShell command",
            "View practical examples for commands",
            "Read detailed parameter descriptions",
            "Open online documentation in browser"
        ],
        examples: [
            "Get-Help Get-Process",
            "Get-Help Get-Service -Examples",
            "Get-Help about_Operators",
            "Get-Help Invoke-WebRequest -Online"
        ]
    },
    {
        name: "Get-Command",
        category: "help",
        description: "Gets all commands available in the session including cmdlets, aliases, functions, and scripts.",
        formula: "Get-Command [-Name] <pattern> [-Module <module>] [-CommandType <type>]",
        usage: [
            "Find commands by name pattern",
            "Discover commands in specific modules",
            "Filter by command type (Cmdlet, Function, Alias)",
            "Explore commands for a specific verb or noun"
        ],
        examples: [
            "Get-Command -Name *Process*",
            "Get-Command -Module ActiveDirectory",
            "Get-Command -Verb Get -Noun *Service*",
            "Get-Command -CommandType Alias"
        ]
    },

    // ── Output Formatting ──
    {
        name: "Format-Table",
        category: "formatting",
        description: "Formats command output as a table with selected properties as columns. Most common formatting command.",
        formula: "<command> | Format-Table [-Property] <props> [-AutoSize] [-Wrap]",
        usage: [
            "Display data in clean tabular format",
            "Auto-size columns for best fit",
            "Choose which properties to show as columns",
            "Wrap long text instead of truncating"
        ],
        examples: [
            "Get-Process | Format-Table Name, CPU, Id -AutoSize",
            "Get-Service | Format-Table -Property Name, Status, StartType",
            "Get-ChildItem | Format-Table Name, Length, LastWriteTime -AutoSize",
            "Get-Process | Format-Table Name, @{Label='Memory(MB)';Expression={[math]::Round($_.WS/1MB,2)}} -AutoSize"
        ]
    },
    {
        name: "Format-List",
        category: "formatting",
        description: "Formats output as a list of properties. Shows each property on its own line for detailed viewing.",
        formula: "<command> | Format-List [-Property] <props>",
        usage: [
            "View all properties of an object in detail",
            "Display long string values without truncation",
            "Examine object details for debugging",
            "Show comprehensive property information"
        ],
        examples: [
            "Get-Service wuauserv | Format-List *",
            "Get-Process -Name powershell | Format-List",
            "Get-ComputerInfo | Format-List OsName, OsVersion",
            "Get-NetIPAddress | Format-List InterfaceAlias, IPAddress, PrefixLength"
        ]
    },
    {
        name: "Out-GridView",
        category: "formatting",
        description: "Sends output to an interactive graphical table window with sorting and filtering capabilities.",
        formula: "<command> | Out-GridView [-Title <title>] [-PassThru]",
        usage: [
            "Display data in an interactive GUI window",
            "Filter and sort data visually",
            "Select items interactively with -PassThru",
            "Review large datasets comfortably"
        ],
        examples: [
            "Get-Process | Out-GridView",
            "Get-Service | Out-GridView -Title 'Windows Services'",
            "Get-EventLog System -Newest 100 | Out-GridView",
            "Get-Process | Out-GridView -PassThru | Stop-Process"
        ]
    },

    // ── Registry Management ──
    {
        name: "Get-ItemProperty",
        category: "registry",
        description: "Retrieves the properties (values) of a specified registry key or file system item.",
        formula: "Get-ItemProperty -Path <path> [-Name <name>]",
        usage: [
            "Read registry key values",
            "Retrieve specific registry properties",
            "Query application configuration from registry",
            "Check file system extended properties"
        ],
        examples: [
            "Get-ItemProperty -Path 'HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion'",
            "Get-ItemProperty -Path 'HKCU:\\Software\\MyApp' -Name Settings",
            "(Get-ItemProperty 'HKLM:\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion').ProductName",
            "Get-ItemProperty -Path 'HKLM:\\SYSTEM\\CurrentControlSet\\Services\\wuauserv'"
        ]
    },
    {
        name: "Set-ItemProperty",
        category: "registry",
        description: "Sets the value of a property for a registry key or file system item.",
        formula: "Set-ItemProperty -Path <path> -Name <name> -Value <value>",
        usage: [
            "Modify registry values",
            "Update application settings in registry",
            "Configure system properties",
            "Manage file attributes"
        ],
        examples: [
            "Set-ItemProperty -Path 'HKCU:\\Software\\MyApp' -Name Theme -Value 'Dark'",
            "Set-ItemProperty -Path 'HKCU:\\Software\\MyApp' -Name MaxRetries -Value 5",
            "Set-ItemProperty -Path 'HKLM:\\SYSTEM\\CurrentControlSet\\Services\\Spooler' -Name Start -Value 2",
            "Set-ItemProperty -Path 'HKCU:\\Console' -Name FontSize -Value 0x100000"
        ]
    },
    {
        name: "New-ItemProperty",
        category: "registry",
        description: "Creates a new property (value) for a registry key and sets its value.",
        formula: "New-ItemProperty -Path <path> -Name <name> -Value <value> [-PropertyType <type>]",
        usage: [
            "Add new registry values",
            "Create application configuration entries",
            "Set up new registry-based settings",
            "Define typed registry properties (DWORD, String, etc.)"
        ],
        examples: [
            "New-ItemProperty -Path 'HKCU:\\Software\\MyApp' -Name Version -Value '2.0'",
            "New-ItemProperty -Path 'HKCU:\\Software\\MyApp' -Name IsEnabled -Value 1 -PropertyType DWord",
            "New-ItemProperty -Path 'HKCU:\\Software\\MyApp' -Name InstallPath -Value 'C:\\App' -PropertyType String",
            "New-ItemProperty -Path 'HKCU:\\Software\\MyApp' -Name Flags -Value 0xFF -PropertyType DWord"
        ]
    },

    // ── Remoting ──
    {
        name: "Invoke-Command",
        category: "remoting",
        description: "Runs commands on local and remote computers. The primary command for PowerShell remoting.",
        formula: "Invoke-Command [-ComputerName] <host> -ScriptBlock { <commands> } [-Credential <cred>]",
        usage: [
            "Execute commands on remote computers",
            "Run scripts across multiple machines simultaneously",
            "Execute local scripts on remote hosts",
            "Manage remote servers from a central location"
        ],
        examples: [
            "Invoke-Command -ComputerName Server01 -ScriptBlock { Get-Process }",
            "Invoke-Command -ComputerName Server01,Server02 -ScriptBlock { Get-Service }",
            "Invoke-Command -ComputerName Server01 -FilePath C:\\Scripts\\deploy.ps1",
            "Invoke-Command -ComputerName Server01 -ScriptBlock { Restart-Service IIS } -Credential $cred"
        ]
    },
    {
        name: "Enter-PSSession",
        category: "remoting",
        description: "Starts an interactive remote PowerShell session with a single remote computer.",
        formula: "Enter-PSSession [-ComputerName] <host> [-Credential <cred>]",
        usage: [
            "Open an interactive remote shell session",
            "Troubleshoot remote servers directly",
            "Perform administrative tasks on remote machines",
            "Test commands on remote computers interactively"
        ],
        examples: [
            "Enter-PSSession -ComputerName Server01",
            "Enter-PSSession -ComputerName Server01 -Credential (Get-Credential)",
            "Enter-PSSession -ComputerName 192.168.1.100",
            "Enter-PSSession -ComputerName Server01 -UseSSL"
        ]
    },

    // ── Data Conversion ──
    {
        name: "ConvertTo-Json",
        category: "content",
        description: "Converts objects to JSON formatted strings. Essential for working with APIs and configuration files.",
        formula: "<object> | ConvertTo-Json [-Depth <n>] [-Compress]",
        usage: [
            "Convert PowerShell objects to JSON format",
            "Prepare data for REST API calls",
            "Create JSON configuration files",
            "Serialize complex objects"
        ],
        examples: [
            "Get-Process | Select-Object Name, CPU | ConvertTo-Json",
            "@{Name='John';Age=30} | ConvertTo-Json",
            "Get-Service | ConvertTo-Json -Depth 3",
            "@{api='v1';data=@(1,2,3)} | ConvertTo-Json -Compress"
        ]
    },
    {
        name: "ConvertFrom-Json",
        category: "content",
        description: "Converts JSON formatted strings to PowerShell objects. Used for parsing API responses and config files.",
        formula: "<json-string> | ConvertFrom-Json [-Depth <n>]",
        usage: [
            "Parse JSON from API responses",
            "Read JSON configuration files",
            "Convert JSON strings to manipulable objects",
            "Process webhook payloads"
        ],
        examples: [
            "Get-Content config.json | ConvertFrom-Json",
            "'{\"name\":\"John\",\"age\":30}' | ConvertFrom-Json",
            "(Invoke-WebRequest 'https://api.example.com/data').Content | ConvertFrom-Json",
            "$json | ConvertFrom-Json | Select-Object name, email"
        ]
    },
    {
        name: "Export-Csv",
        category: "content",
        description: "Exports objects to a CSV file. Each object property becomes a column in the CSV.",
        formula: "<command> | Export-Csv [-Path] <path> [-NoTypeInformation] [-Append]",
        usage: [
            "Save data to spreadsheet-compatible format",
            "Export reports for further analysis",
            "Append data to existing CSV files",
            "Create data files for other applications"
        ],
        examples: [
            "Get-Process | Export-Csv C:\\processes.csv -NoTypeInformation",
            "Get-Service | Export-Csv C:\\services.csv -NoTypeInformation",
            "Get-EventLog System -Newest 100 | Export-Csv C:\\events.csv",
            "Get-ADUser -Filter * | Export-Csv C:\\users.csv -NoTypeInformation -Append"
        ]
    },
    {
        name: "Import-Csv",
        category: "content",
        description: "Reads data from CSV files and creates objects with properties from column headers.",
        formula: "Import-Csv [-Path] <path> [-Delimiter <char>] [-Header <names>]",
        usage: [
            "Read CSV data into PowerShell objects",
            "Process spreadsheet exports",
            "Bulk import user or configuration data",
            "Read CSV files with custom delimiters"
        ],
        examples: [
            "Import-Csv C:\\users.csv",
            "Import-Csv C:\\data.csv -Delimiter ';'",
            "Import-Csv C:\\servers.csv | ForEach-Object { Test-Connection $_.Hostname }",
            "Import-Csv C:\\users.csv | New-LocalUser"
        ]
    },

    // ── Web Requests ──
    {
        name: "Invoke-WebRequest",
        category: "network",
        description: "Sends HTTP and HTTPS requests to web pages and APIs. Returns the response including headers, content, and status.",
        formula: "Invoke-WebRequest [-Uri] <uri> [-Method <GET|POST|PUT|DELETE>] [-Body <body>] [-Headers <headers>]",
        usage: [
            "Make HTTP requests to REST APIs",
            "Download files from the web",
            "Scrape web page content",
            "Submit form data to web applications"
        ],
        examples: [
            "Invoke-WebRequest -Uri 'https://api.github.com'",
            "Invoke-WebRequest -Uri 'https://example.com/file.zip' -OutFile C:\\file.zip",
            "Invoke-WebRequest -Uri 'https://api.example.com' -Method POST -Body $jsonBody",
            "(Invoke-WebRequest 'https://example.com').Links"
        ]
    },
    {
        name: "Invoke-RestMethod",
        category: "network",
        description: "Sends HTTP requests and automatically parses JSON/XML responses into PowerShell objects. Preferred for API interaction.",
        formula: "Invoke-RestMethod [-Uri] <uri> [-Method <verb>] [-Body <body>] [-ContentType <type>]",
        usage: [
            "Call REST APIs with automatic response parsing",
            "Send and receive JSON data",
            "Interact with cloud service APIs",
            "Build automation with web services"
        ],
        examples: [
            "Invoke-RestMethod -Uri 'https://api.github.com/users/octocat'",
            "Invoke-RestMethod -Uri 'https://api.example.com/data' -Method POST -Body ($data | ConvertTo-Json) -ContentType 'application/json'",
            "Invoke-RestMethod 'https://jsonplaceholder.typicode.com/todos/1'",
            "Invoke-RestMethod -Uri $apiUrl -Headers @{Authorization='Bearer $token'}"
        ]
    }
];
