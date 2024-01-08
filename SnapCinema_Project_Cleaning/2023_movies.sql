-- Create top_movies_2023 table
CREATE TABLE this_year (
	movie_rank INT NOT NULL,
	title VARCHAR(100) PRIMARY KEY NOT NULL,
	number_theaters INT NOT NULL,
	gross_earnings INT NOT NULL,
	release_date VARCHAR (10) NOT NULL,
	distributor VARCHAR (100) NOT NULL
);

-- Create goat_movies table
CREATE TABLE goat_movies (
	movie_rank INT PRIMARY KEY NOT NULL,
	title VARCHAR(100),
	lifetime_gross INT NOT NULL,
	year_released VARCHAR (10) NOT NULL
);

SELECT * FROM this_year
SELECT * FROM goat_movies