# PowerShell Commands Reference Guide

A comprehensive table of essential PowerShell commands with details on how, what, and when to use them.

## File and Directory Management

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-ChildItem` | Lists files and directories | When you need to view contents of a directory | `Get-ChildItem [-Path] <path> [-Recurse] [-Filter <pattern>]` | `Get-ChildItem C:\Users -Recurse -Filter *.txt` |
| `Set-Location` | Changes current directory | When navigating between folders | `Set-Location [-Path] <path>` | `Set-Location C:\Windows` |
| `New-Item` | Creates new files or directories | When creating new files/folders | `New-Item [-Path] <path> -ItemType <File\|Directory>` | `New-Item -Path "C:\Temp\test.txt" -ItemType File` |
| `Remove-Item` | Deletes files or directories | When removing files/folders | `Remove-Item [-Path] <path> [-Recurse] [-Force]` | `Remove-Item C:\Temp\old -Recurse -Force` |
| `Copy-Item` | Copies files or directories | When duplicating files/folders | `Copy-Item [-Path] <source> -Destination <dest> [-Recurse]` | `Copy-Item C:\Source\* C:\Dest -Recurse` |
| `Move-Item` | Moves files or directories | When relocating files/folders | `Move-Item [-Path] <source> -Destination <dest>` | `Move-Item C:\Old\file.txt C:\New\` |
| `Rename-Item` | Renames files or directories | When changing file/folder names | `Rename-Item [-Path] <path> -NewName <name>` | `Rename-Item C:\file.txt -NewName newfile.txt` |
| `Test-Path` | Checks if path exists | When validating file/folder existence | `Test-Path [-Path] <path>` | `Test-Path C:\Windows\System32` |

## Process Management

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-Process` | Lists running processes | When monitoring system processes | `Get-Process [-Name] <name> [-Id] <id>` | `Get-Process -Name chrome` |
| `Start-Process` | Starts a new process | When launching applications | `Start-Process [-FilePath] <path> [-ArgumentList] <args>` | `Start-Process notepad.exe -ArgumentList "C:\file.txt"` |
| `Stop-Process` | Terminates a process | When ending unresponsive programs | `Stop-Process -Name <name> [-Force]` | `Stop-Process -Name chrome -Force` |
| `Wait-Process` | Waits for process to stop | When synchronizing process completion | `Wait-Process -Name <name> [-Timeout] <seconds>` | `Wait-Process -Name notepad -Timeout 30` |

## Service Management

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-Service` | Lists Windows services | When checking service status | `Get-Service [-Name] <name> [-DisplayName] <display>` | `Get-Service -Name wuauserv` |
| `Start-Service` | Starts a service | When activating a stopped service | `Start-Service [-Name] <name>` | `Start-Service -Name Spooler` |
| `Stop-Service` | Stops a service | When deactivating a running service | `Stop-Service [-Name] <name> [-Force]` | `Stop-Service -Name Spooler -Force` |
| `Restart-Service` | Restarts a service | When service needs to reload | `Restart-Service [-Name] <name>` | `Restart-Service -Name wuauserv` |
| `Set-Service` | Modifies service properties | When changing service startup type | `Set-Service -Name <name> -StartupType <type>` | `Set-Service -Name Spooler -StartupType Automatic` |

## Network Commands

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Test-Connection` | Pings a computer | When testing network connectivity | `Test-Connection [-ComputerName] <host> [-Count] <n>` | `Test-Connection google.com -Count 4` |
| `Get-NetIPAddress` | Shows IP configuration | When viewing network adapter IPs | `Get-NetIPAddress [-InterfaceAlias] <name>` | `Get-NetIPAddress -InterfaceAlias Ethernet` |
| `Get-NetAdapter` | Lists network adapters | When checking network interfaces | `Get-NetAdapter [-Name] <name>` | `Get-NetAdapter -Name Wi-Fi` |
| `Resolve-DnsName` | Performs DNS lookup | When resolving domain names | `Resolve-DnsName [-Name] <domain>` | `Resolve-DnsName www.google.com` |
| `Test-NetConnection` | Tests network connection | When diagnosing connectivity issues | `Test-NetConnection [-ComputerName] <host> -Port <port>` | `Test-NetConnection google.com -Port 443` |

## System Information

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-ComputerInfo` | Gets system information | When gathering system details | `Get-ComputerInfo` | `Get-ComputerInfo` |
| `Get-WmiObject` | Queries WMI objects | When accessing system management info | `Get-WmiObject -Class <class>` | `Get-WmiObject -Class Win32_OperatingSystem` |
| `Get-CimInstance` | Queries CIM instances | When accessing hardware/OS info (modern) | `Get-CimInstance -ClassName <class>` | `Get-CimInstance -ClassName Win32_BIOS` |
| `Get-HotFix` | Lists installed updates | When checking Windows updates | `Get-HotFix [-Id] <KB#>` | `Get-HotFix -Id KB5001234` |
| `Get-EventLog` | Retrieves event logs | When troubleshooting system issues | `Get-EventLog -LogName <name> [-Newest] <n>` | `Get-EventLog -LogName System -Newest 10` |

## User and Security Management

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-LocalUser` | Lists local user accounts | When managing local users | `Get-LocalUser [-Name] <name>` | `Get-LocalUser -Name Administrator` |
| `New-LocalUser` | Creates new local user | When adding user accounts | `New-LocalUser -Name <name> -Password <pwd>` | `New-LocalUser -Name JohnDoe -Password (ConvertTo-SecureString "Pass123" -AsPlainText -Force)` |
| `Get-LocalGroup` | Lists local groups | When viewing security groups | `Get-LocalGroup [-Name] <name>` | `Get-LocalGroup -Name Administrators` |
| `Get-ExecutionPolicy` | Shows script execution policy | When checking security settings | `Get-ExecutionPolicy [-Scope] <scope>` | `Get-ExecutionPolicy -Scope CurrentUser` |
| `Set-ExecutionPolicy` | Sets script execution policy | When enabling/restricting scripts | `Set-ExecutionPolicy [-ExecutionPolicy] <policy>` | `Set-ExecutionPolicy RemoteSigned` |

## Text and Content Processing

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-Content` | Reads file contents | When viewing file data | `Get-Content [-Path] <path> [-TotalCount] <n>` | `Get-Content C:\log.txt -TotalCount 10` |
| `Set-Content` | Writes content to file | When creating/overwriting files | `Set-Content [-Path] <path> -Value <content>` | `Set-Content C:\file.txt -Value "Hello World"` |
| `Add-Content` | Appends content to file | When adding to existing files | `Add-Content [-Path] <path> -Value <content>` | `Add-Content C:\log.txt -Value "New entry"` |
| `Select-String` | Searches text patterns | When finding text in files | `Select-String -Path <path> -Pattern <regex>` | `Select-String -Path *.log -Pattern "ERROR"` |
| `Out-File` | Redirects output to file | When saving command output | `<command> \| Out-File [-FilePath] <path>` | `Get-Process \| Out-File C:\processes.txt` |

## Variables and Objects

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-Variable` | Lists variables | When viewing defined variables | `Get-Variable [-Name] <name>` | `Get-Variable -Name PSVersionTable` |
| `Set-Variable` | Creates/modifies variables | When storing data | `Set-Variable -Name <name> -Value <value>` | `Set-Variable -Name myVar -Value 100` |
| `Clear-Variable` | Clears variable value | When resetting variables | `Clear-Variable -Name <name>` | `Clear-Variable -Name myVar` |
| `Remove-Variable` | Deletes variable | When removing variables | `Remove-Variable -Name <name>` | `Remove-Variable -Name myVar` |
| `Get-Member` | Shows object properties/methods | When exploring object structure | `<object> \| Get-Member` | `Get-Process \| Get-Member` |

## Pipeline and Filtering

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Where-Object` | Filters objects | When selecting specific items | `<command> \| Where-Object {<condition>}` | `Get-Process \| Where-Object {$_.CPU -gt 100}` |
| `Select-Object` | Selects properties | When choosing specific columns | `<command> \| Select-Object <properties>` | `Get-Process \| Select-Object Name, CPU` |
| `Sort-Object` | Sorts objects | When ordering results | `<command> \| Sort-Object <property> [-Descending]` | `Get-Process \| Sort-Object CPU -Descending` |
| `ForEach-Object` | Processes each object | When performing actions on items | `<command> \| ForEach-Object {<script>}` | `Get-ChildItem \| ForEach-Object {$_.Name}` |
| `Measure-Object` | Calculates statistics | When counting/summing data | `<command> \| Measure-Object [-Property] <prop> [-Sum]` | `Get-Process \| Measure-Object -Property CPU -Sum` |
| `Group-Object` | Groups objects | When categorizing data | `<command> \| Group-Object <property>` | `Get-Process \| Group-Object Company` |

## Module Management

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-Module` | Lists loaded modules | When checking available modules | `Get-Module [-ListAvailable]` | `Get-Module -ListAvailable` |
| `Import-Module` | Loads a module | When adding module functionality | `Import-Module [-Name] <name>` | `Import-Module ActiveDirectory` |
| `Remove-Module` | Unloads a module | When removing module from session | `Remove-Module [-Name] <name>` | `Remove-Module ActiveDirectory` |
| `Find-Module` | Searches PowerShell Gallery | When finding new modules | `Find-Module [-Name] <name>` | `Find-Module -Name Pester` |
| `Install-Module` | Installs module from gallery | When adding new modules | `Install-Module [-Name] <name> [-Scope] <scope>` | `Install-Module -Name Az -Scope CurrentUser` |

## Help and Documentation

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-Help` | Shows command help | When learning about commands | `Get-Help <command> [-Examples] [-Full]` | `Get-Help Get-Process -Examples` |
| `Update-Help` | Updates help files | When refreshing documentation | `Update-Help [-Force]` | `Update-Help -Force` |
| `Get-Command` | Lists available commands | When finding commands | `Get-Command [-Name] <pattern> [-Module] <module>` | `Get-Command -Name *Process*` |

## Output Formatting

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Format-Table` | Formats as table | When displaying tabular data | `<command> \| Format-Table [-Property] <props>` | `Get-Process \| Format-Table Name, CPU` |
| `Format-List` | Formats as list | When viewing detailed properties | `<command> \| Format-List [-Property] <props>` | `Get-Service \| Format-List *` |
| `Format-Wide` | Formats in columns | When displaying single property | `<command> \| Format-Wide [-Property] <prop>` | `Get-Process \| Format-Wide Name` |
| `Out-GridView` | Shows interactive grid | When filtering data visually | `<command> \| Out-GridView` | `Get-Process \| Out-GridView` |

## Registry Management

| Command | What It Does | When to Use | Formula/Syntax | Example |
|---------|-------------|-------------|----------------|---------|
| `Get-ItemProperty` | Reads registry values | When retrieving registry data | `Get-ItemProperty -Path <path> -Name <name>` | `Get-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion" -Name ProgramFilesDir` |
| `Set-ItemProperty` | Modifies registry values | When changing registry settings | `Set-ItemProperty -Path <path> -Name <name> -Value <val>` | `Set-ItemProperty -Path "HKCU:\Software\MyApp" -Name Setting -Value 1` |
| `New-ItemProperty` | Creates registry value | When adding new registry entries | `New-ItemProperty -Path <path> -Name <name> -Value <val>` | `New-ItemProperty -Path "HKCU:\Software\MyApp" -Name NewSetting -Value "test"` |

## Common Aliases

| Alias | Full Command | Notes |
|-------|-------------|-------|
| `ls`, `dir` | `Get-ChildItem` | List directory contents |
| `cd`, `chdir` | `Set-Location` | Change directory |
| `pwd` | `Get-Location` | Print working directory |
| `cat`, `type` | `Get-Content` | Display file contents |
| `cp`, `copy` | `Copy-Item` | Copy files |
| `mv`, `move` | `Move-Item` | Move files |
| `rm`, `del` | `Remove-Item` | Remove files |
| `cls`, `clear` | `Clear-Host` | Clear screen |
| `ps` | `Get-Process` | List processes |
| `kill` | `Stop-Process` | Stop process |
| `%` | `ForEach-Object` | Loop through items |
| `?` | `Where-Object` | Filter items |
| `select` | `Select-Object` | Select properties |
| `sort` | `Sort-Object` | Sort items |

## Tips and Best Practices

> [!TIP]
> **Tab Completion**: Press Tab to auto-complete commands, parameters, and file paths.

> [!TIP]
> **Pipeline Power**: Chain commands using `|` to pass output from one command to another.

> [!IMPORTANT]
> **Execution Policy**: You may need to run `Set-ExecutionPolicy RemoteSigned` to execute scripts.

> [!NOTE]
> **Get Help**: Always use `Get-Help <command> -Examples` to see practical usage examples.

> [!WARNING]
> **Administrative Rights**: Some commands require running PowerShell as Administrator.

## Common Parameter Patterns

- **`-WhatIf`**: Shows what would happen without executing (dry run)
- **`-Confirm`**: Prompts for confirmation before executing
- **`-Force`**: Bypasses restrictions and prompts
- **`-Recurse`**: Applies command to all subdirectories
- **`-Verbose`**: Shows detailed information about operation
- **`-ErrorAction`**: Controls how errors are handled (Stop, Continue, SilentlyContinue)
