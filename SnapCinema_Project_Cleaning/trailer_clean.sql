CREATE TABLE trailer (
    videoName VARCHAR(100),
    viewcount INT,
    PRIMARY KEY (videoName)
);

CREATE TABLE trailer_clean (
	videoName VARCHAR(100),
    viewcount INT,
    PRIMARY KEY (videoName)
);

--Barbie
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Barbie', 79922625);

--The Super Mario Bros. Movie
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Super Mario Bros. Movie', 30401495);

--Oppenheimer
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Oppenheimer', 113097125);

--Guardian of the Galaxy Vol.3
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Guardians of the Galaxy Vol.3', 53060721);

--Fast X
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Fast X', 85735892);

--Spider-Man: Across the Spider-Verse
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Spider-Man: Across the Spider-Verse', 87438940);

--The Little Mermaid
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Little Mermaid', 26057586);

--Mission:Impossible-Dead Reckoning Part One
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Mission: Impossible - Dead Reckoning Part One', 34839569);

--Elemental
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Elemental',46568237);

--Ant-Man and the Wasp: Quantumania
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Ant-Man and the Wasp: Quantumania', 59840782);

--John Wick: Chapter 4
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('John Wick: Chapter 4', 80734205);

--Transformers: Rise of the Beasts
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Transformers: Rise of the Beasts', 44315621);

--Meg 2: The Trench
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Meg 2: The Trench', 46942856);

--Indiana Jones and the Dieal of Destiny
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Indiana Jones and the Dial of Destiny', 16408874);

--The Hunger Games: The Ballad of Songbirds & Snakes
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Hunger Games: The Ballad of Songbirds & Snakes',52480356);

--Five Nights at Freddy's
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Five Nights at Freddys',64226929);

--Creed III
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Creed III',37679312);

--The Flash
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Flash',53147143);

--The Nun II
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Nun II',41725608);

--Wonka
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Wonka',12626941)

Select * from trailer_clean