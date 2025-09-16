TYPES OF NETWORKS
LAN - Local area network (limited devices and area like school)
                   
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

MAN - Metropolitan area network -> network of a city

    ios device- - - - Router - - - -mobile (10.0.0.4)                      ios device- - - - Router - - - -mobile (10.0.0.4).        
    (10.0.0.5)         / | \  \                                            (10.0.0.5)        / | \  \
                      /  |  \  \                         connection                         /  |  \  \
                computer3    \  \  computer5           established between          computer3  |   \  computer5 (10.0.0.2)
                      computer1  \ (10.0.0.2)            multiple LANs                       computer1  \ 
                    (10.0.0.3)      computer2                                                (10.0.0.3)    computer2
                                   (10.0.0.1)                                                             (10.0.0.1)

WAN - Wide area network -> network of a country
wires have been made to travel the data

TYPES OF TOPOLOGY

1. Bus Topology - 
      ______________________________________ wire 
      |          |             |           |
computer1    computer2      computer3  computer4

2. Ring Topology
                        computer1 
                       /         \ 
                      /           \
             computer4            computer2
                      \           /
                       \         / 
                        computer3         
3. Star Topology

                   computer1 
                       \          
                        \         
                       Hub       
                      /    \      
                     /      \   
             computer3     computer3

4. Mesh Topology
5. Hybrid Topology


HOW VPN WORKS AND DARK WEB WORKS ?

ios device- - - - Router - - - -mobile (10.0.0.4) -------------------------ios device- - - - Router - - - -mobile (10.0.0.4).        
    (10.0.0.5)         / |  \  \                                            (10.0.0.5)        / | \  \
                      /  |   \  \                         connection                         /  |  \  \
                computer3     \  computer5           established between          computer3  |   \  \   computer5 (10.0.0.2)
                      computer1 \ (10.0.0.2)            multiple LANs                       computer1 \ 
                    (10.0.0.3)   computer2                                                (10.0.0.3)  computer2
                                 (10.0.0.1)                                                            (10.0.0.1)

Router is responsible for providing the route to the data packet to correct destination

____________________________________________
|source address | data | destination address|
|___________________________________________|-> data is encrypted when send to router
          dsa code --> YKSTU 

"PRIVACY IS A MYTH"


VPN (Virtual private network)
In a country, we are not able to access some websites
example - Govt bans xyz.com and ISP responsible for banning the websites

(shows vpn ip address , but actual is same)
computer1 (13.2.5.6)----------requests to banned website ---------ISP------->vpn server (Germany) 91.23.4.2-----> server
                                                                                                                  Germany
(vpn installed and connect                                it will think that
with vpn server of the vountry                            this address is not banned in Country 
 you want the ip address)                                 so it will let it leave

 Then VPN goes to that illegal website and requests for you and made request

 |source id | encrypted data | destination id|
            deep packet analysis
            (isp can predict which website you are 
            visiting via VPN )