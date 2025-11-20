# MtgaProto
This repository contains a GitHub Actions workflow to extract the protocol buffer definitions (.proto) from the Magic: The Gathering Arena (MTGA) setup and commit it.

As of now, the protobuf definitions are contained in the file `Wizards.MDN.GreProtobuf.Unity.dll`. This file is part of the MTGA setup. This repository uses [MsiExtractor](https://github.com/riQQ/MsiExtractor) to extract it from the MTGA MSI setup.

The proto definition is reversed from the DLL using [Proto-extractor](https://github.com/riQQ/proto-extractor/tree/mtgatool-formatting).

The current version information used by the MTGA update mechanism can be found at  
https://mtgarena.downloads.wizards.com/Live/Windows64/version.
