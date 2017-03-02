open Printf;;
printf "Hello, this is an OCaml service.\n";
printf "hook_params is now populated with request parameters\n";
printf "Try setting the ?foo=bar in the url for this service.\n";
printf "You can also try sending JSON or Form data to this service.\n";
Hashtbl.iter (fun k v -> printf "%s: %s\n" k v) hook_params;