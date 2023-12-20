// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

    // Hämta data från användaren för pris, vänner och dricks.
    SET variabel pris efter användarens input som ett nummer;
    SET variabel vänner efter användarens input som ett nummer;
    SET variabel dricks efter användarens input som ett nummer;


    när användaren trycker på knappen att räkna
        om någon av inmatingen inte är korrekt format
            skriv ut ett meddelande till användaren att enbart fylla ett giltigt nummer i fälten;
        annars
            Starta funktion countPrice(pris, vänner, dricks);

    Skriv ut variabel prisVänner till användaren;

    funktion countPrice(pris, vänner, dricks)
        konvertera om värdet 'dricks' till ett decimaltal;
        SET variabel 'totalPris' till 'pris' * 'dricks' + 'pris';
        SET variabel 'prisVänner' till 'totalPris delat med 'vänner';
        returnera värdet prisVänner;
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

funktion play()
    // Skapa Variabler för spelet
    SET variabel ordbok = [..., ..., ...]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till slumpat ord ur ordbok;
    SET variabel slutOrd till slumpat ord ur ordbok;
    SET variabel isOrdSamma till sant; //För en loop som kontrollerar så de slumpade orden inte är samma 
    SET variabel isPlaying till sant;  //För en loop som körs till spelaren har ändrat till slutOrd 
    SET variabel SpelOrd som en lista; //Här kommer de spelade orden att hamna

    
    Loopa så länge isPlaying är sant // Loop som går tills användaren har ändrat till rätt slutord från startOrd. 
       
        Loopa så långe som isOrdSamma // loop som går tills startOrd och SlutOrd är olika och lika långa. 
            om slutOrd är samma ord som startOrd
                slumpa fram nytt slutOrd;
            annars
                om längen på slutOrd är samma som startOrd
                    lägg till startOrd i spelOrd listan;
                    isOrdSamma till falskt;
                annars
                    slumpa fram nytt slutOrd;
    
        om nyttOrd är samma som slutOrd 
            ändra variabel isPlaying till falskt;  
        annars 
            SET variabel nyttOrd efter användarens input som text;
            när användaren trycker på knapp Kör funktion kontrolleraOrd(nyttOrd, startOrd, slutOrd, spelOrd, ordBok);

    skriv ut Grattis du klarade spelet på 'antal ord i spelOrd listan minus 2' ändringar. Här är orden som användes 'spelOrd';


funktion kontrolleraOrd(nyttOrd, startOrd, slutOrd, spelOrd, ordBok)

    om nyttOrd är med med i ordBok
         om nyttOrd är lika långt som slutOrd
            Kör funktion skiljerEttTecken(nyttOrd, startOrd);

            om diffCount är 1 
                lägg till nyttOrd i spelOrd listan;
                ändra startOrd till värdet på nyttOrd; 
            annars 
                skriv ut meddelande till användaren "du kan bara ändra en bokstav"; 
         annars 
            skriv ut meddelande till användaren "ordet måste vara lika långt som tidigare ord";
    annars 
        skriv ut meddelande till användaren om att "du måste ange ett giltigt ord";  

funktion skiljerEttTecken(nyttOrd, startOrd)
    SET variabel diffCount till 0;

    loopa igenom alla tecken i nyttOrd och jämför mot startOrd
        om teknet är olikt mellan de två orden 
            öka diffCount med 1;
    
    return diffCount;

*/