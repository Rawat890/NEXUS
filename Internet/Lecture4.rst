
Computer1----------> R1------------>R2---------------->Computer2
digital signals                                        digital signals
(binary)

IPV6 - [2^128] - represented in hexadecimel
0000 : 0000 : 0000 : 0000 : 0000 : 0000 : 0000 : 0000
FFFF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF : FFFF  (Maximum reach)

each 0 is of 4 bit, why as F = 15 (1111)

IPV4 - [2^32] - represented in hexadecimel
00000000 : 00000000 : 00000000 : 00000000

Class A - 0(fixed) _ _ _ _ _ _ _ (0-127)  . _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ 
Class B - 1 0(fixed) _ _ _ _ _ _ (128-191). _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ 
Class C - 1 1 0(fixed) _ _ _ _ _ (191-223). _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ 
Class D - 1 1 1 0(fixed) _ _ _ _ (224-239). _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ 
Class E - 1 1 1 1(fixed) _ _ _ _ (240-255). _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ . _ _ _ _ _ _ _ _ 

IANA is responsible for distributing the IP addresses
(international assigned of number authority) --> distibute to 5 regions of world
Asia-Pacific ---> they also provide country wise to ISP providers of their country like VI, Jio 
provides in meaningful way like 73.0.0.0 to 73.255.255.255 ip addresses are given to jio (2^24)
Africa
North-America
Latin-America
Europe

Class A  - _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
            8 bits                            24 bits
            Network id                        Host Id
    (like vi get 73, 74                      1.67 crore host ids (connected to network)
    75,76, 77, 78, jio get                         |
    79 etc)                                        |  (2^24 - 2) addresses given to public/hosts
                                                   v
                                                  / \
                                    Network address  Broadcast address 
                                                     (same message to be sent to be devices)
                                   (73.0.0.0 and 73.255.255.255)
                                        |
                                 reserved for isp 
                                 company

Companies like vi, jio etc - >
For class A - 0 and 127 are not given to public , so total network ids for hosts is 1 to 126

For the first time when you bought a sim and try to connect to ISP, the ip address you will have 0.0.0.0


Country that needs in thousands -  4 network id X 65k = 2.6 lakh ip addresses
Class B - 1 0  _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                  16 bits                            16 bits
                  2^14 network id                 2^16 host id

University that needs in hundreds - 10 network id X 254 = 2540 ip addresses
Class C - 1 0  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _
                  24 bits                                        8 bits
                  2^14 network id                             2^8 -2 host id

USED FOR MULTICASTING
Class D - 1 1 1 0 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                         2^28 ip addresses (no concept of network id and host id)

Broadcast is not possible as there are multiple persons on different networks
Example - streaming in zoom and the data packets of sounds when someone talks 

USED FOR MULTICASTING
Class E - 1 1 1 1 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                         2^28 ip addresses (no concept of network id and host id)

Reserved for future usage by IANA
                                