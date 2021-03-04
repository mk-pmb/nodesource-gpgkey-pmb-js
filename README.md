
<!--#echo json="package.json" key="name" underline="=" -->
nodesource-gpgkey-pmb
=====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
NodeSource apt GPG key as used on my mirror.
<!--/#echo -->



API
---

This module exports one function:

### readKey(ver)

Return they key file text (as a string) for key version `ver`,
which is expected to be a date string in yymmdd format,
or (default) `'latest'`.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------

I'm currently investigating where I can obtain a free software license.

<!-- x#echo json="package.json" key=".license" -->
<!--/#echo -->
