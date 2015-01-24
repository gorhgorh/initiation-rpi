# Connection au raspberry pi

Pour se connecter au raspberry pi plusieurs options sont possibles.

__un écran et un clavier__  
mais ca serais trop facile ! 

__via une connection ssh__  
une connection ssh est une connection sécurisée de terminal a terminal c'est ce que nous allons utiliser aujourd'hui.

pour cela il faut un terminal, si vous êtes sur linux ou osx vous en avez deja un, si vous êtes sous windows in vous faut installer PuTTY (un émulateur de terminal)

*a) Ouvrir un terminal*

Windows : suivez ce [lien](http://marc.terrier.free.fr/docputty/Chapter2.html#gs-insecure)

osx : ouvrir /Applications/Utilities/Terminal.app

linux : ouvrez votre terminal :)

*b) se connecter au serveur distant*

Windows : dans la fenêtre qui s'ouvre au lancement de putty choisir

- host name : L'ip du serveur (sera fournie sur place)
- connection type : ssh

osx/linux : dans le terminal tapper ```ssh pi@<ip du serveur>``` (sera fournie sur place)
2
*c) accepter la clef ssh*

```
The server's host key is not cached in the registry. You
have no guarantee that the server is the computer you
think it is.
The server's rsa2 key fingerprint is:
ssh-rsa 1024 7b:e5:6f:a7:f4:f9:81:62:5c:e3:1f:bf:8b:57:6c:5a
If you trust this host, hit Yes to add the key to
PuTTY's cache and carry on connecting.
If you want to carry on connecting just once, without
adding the key to the cache, hit No.
If you do not trust this host, hit Cancel to abandon the
connection.
``` 

ce message explique que ces deux machine n'ont jamais parlé ensembles et vous permettent d'accepter ou non la connection, dans ce cas, on va dire oui (yes)

*d) connection au compte utilisateur*  
une fois la clef vérifiée ouvrons une session, sous windows renseignez l'utilisateur ```pi```, sous osx/linux c'est deja fait.

entrez le mot de passe ```hokuto```

vous êtes connectés !