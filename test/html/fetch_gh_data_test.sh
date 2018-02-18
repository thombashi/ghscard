#!/usr/bin/env bash

output_dir="data"
base_command="ghscard gen"
targets=(
    "thombashi"
    "kentcdodds"
    "kennethreitz"

    "angular"

    "angular/angular"
    "pallets/flask"
    "Microsoft/TypeScript"
    "thombashi/null"
)

command="${base_command} -o ${output_dir} ${targets[@]}"
echo "${command}"
${command}
