#!/usr/bin/env sh

for pkg in moment.js pleasejs; do
    curl -sS https://api.cdnjs.com/libraries/${pkg}?fields=name,filename,version | jq .
done

for pkg in chart.js jquery fomantic-ui; do
    echo $pkg $(curl -sS https://data.jsdelivr.com/v1/package/npm/${pkg} | jq '.["tags"]["latest"]')
done
