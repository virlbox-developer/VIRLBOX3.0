param (
    [string]$Path = "."
)

$excludeDirs = @("node_modules", ".git", ".github")

Get-ChildItem -Path $Path -Recurse -Force -ErrorAction SilentlyContinue |
Where-Object {
    (
        $_.PSIsContainer -and
        ($excludeDirs -notcontains $_.Name) -and
        -not (Get-ChildItem -Path $_.FullName -Force -ErrorAction SilentlyContinue)
    ) -or (
        -not $_.PSIsContainer -and
        $_.Length -eq 0
    )
} |
Select-Object -ExpandProperty FullName
