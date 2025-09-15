TYPES OF NETWORKS
LAN - Local area network 
                   
                   [All devices connected have common ip address]
        ios device- - - - Router - - - -mobile (10.0.0.4)
        (10.0.0.5)        / | \  \
                         /  |  \  \
                computer3   |   \  computer5
                      computer1  \ (10.0.0.2)
                    (10.0.0.3)      computer2
                                (10.0.0.1)

When data comes in router, it must have address of destination that to drop the data to given destination
So, how router is able to decide as all have same ip address
Here comes the private address

All classes have some private addresses
Class	Private IP Range	Usage
A	10.0.0.0 to 10.255.255.255	Private networks
B	172.16.0.0 to  172.31.255.255	Private networks
C	192.168.0.0 to 192.168.255.255	Private networks
D	224.0.0.0 to  239.255.255.255	Multicast
E	240.0.0.0 to  255.255.255.254	Experimental

Example- You make request to facebook, facebook will see same public address and when response comes to the "router" it checks the private address of the devoce that made the request