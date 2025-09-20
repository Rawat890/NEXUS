DARK WEB AND INTERNET WORKING

(shows vpn ip address , but actual is same)
computer1 (13.2.5.6)----------requests to banned website ---------ISP------->vpn server (Germany) 91.23.4.2-----> server
                                                                                                                  Germany

ISP has the power to slow down the network speed like if you are visiting a certain website, slow down the internet speed
VPN ADDS EXTRA SECURITY LAYER TO DATA YOU SEND, SO DEEP PACKET ANALYSIS IS INTERRUPTED, SO WE GET THE ILLUSION OF FAST WORKING INTERNET

VPN IS A TUNNEL, IT ENCRYPTS THE DATA, SO ISP CANT SEE WHAT WE ARE DOING

DARK WEB
Tor browser can be used to access dark web and websites are of .onion type
It's very secure as the user remain anonymous
It uses multiple layers of encryption to secure the data
It uses multiple nodes to route the data, so the original ip address is hidden

client (ip=10)                                          server(ip=50) - youtube.com
(tor broswser
installed)                                              (onion website)
  |                                                          |
  |----->entry node (encrypted)----->middle node(encrypted)----->exit node(decrypted)----->server
  |      ip=20                        ip=30                  |      ip=40
  |<-----exit node(decrypted)<-----middle node(encrypted)<-----entry node(encrypted)<-----|

       1 level decryption        2 level decryption            3 level decryption

  Tor server uses 3 nodes to route the data, so the original ip address is hidden
  3 level encryption is applied to data that is to be send
  so that at each node, only one layer of encryption is removed
  so that no node can know both the source and destination of the data

  youtube.com --->CVSJ.12 ---> 12JHS.34 --> 34JHS.56  ---> server
  (requested)   (entry node)  (middle node) (exit node)  (onion website)