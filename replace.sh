#!/bin/bash
set -eux

this_script_name="$(basename $0)"
this_script_dir="$(cd $(dirname $0); pwd)"
this_script_path="$this_script_dir/$this_script_name"

pushd $this_script_dir

# replace three/examples with three-mh/examples
from_p='three/examples'
to_p='three-mh/examples'

find . -type f ! -path "*/.git/*" ! -path "*/node_modules/*" ! -path "./$this_script_name" | xargs perl -pi -e "s;$from_p;$to_p;g"
find ./examples/ -type f ! -path "*/.git/*" ! -path "*/node_modules/*" ! -path "./$this_script_name" | xargs perl -pi -e "s;'three';'three-mh';g"

popd
