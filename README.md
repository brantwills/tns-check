# tns-check

Oracle tnsnames.ora exploration web tool

No data is sent to a server, a large goal of this application is to keep the text local.

Demo: http://brantwills.github.io/tns-check/


# What should I do and why use this?

This application explores tnsnames.ora files which can often become unmanageable or disconnected.
Once you have located your tnsname.ora you can drop the file in the area above.
The file is then parsed and exposed in the browser checking syntax and allowing for search and filtering.


# How does it work?

The heart of this application is an Antlr4 tnsnames.ora parser. 
Thankfully Antlr4 has a JavaScript 'grammar' export ability which we leverage to parse the tnsnames.ora structure into the browsers memory.

Once in memory, we can perform several cleanup actions like alerting on possible syntax issues in the tnsnames.ora text or manipulating the order of tnsnames.ora entries. 

A special thanks goes out to all those who have developed the 
(tnsname.g4)[https://github.com/drforr/perl6-ANTLR4/blob/master/corpus/tnsnames.g4]
This grammar is based on the (Oracle 11g Release 2)[https://github.com/drforr/perl6-ANTLR4/blob/master/corpus/tnsnames.g4] Network Reference manual  


# What is a tnsnames.ora file?

The tnsnames.ora file is a configuration file that contains net service names mapped to connect descriptors for the local naming method, or net service names mapped to listener protocol addresses.

A net service name is an alias mapped to a database network address contained in a connect descriptor. A connect descriptor contains the location of the listener through a protocol address and the service name of the database to which to connect.                      

Clients and database servers use the net service name when making a connection with an application.
By default, tnsnames.ora is located in the `$ORACLE_HOME/network/admin` directory on 
UNIX operating systems and in the `%ORACLE_HOME%\network\admin` directory on Windows operating systems.
