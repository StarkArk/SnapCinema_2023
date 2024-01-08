-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "master_merged_df_renamed" (
    "Month" string   NOT NULL,
    "Year" string   NOT NULL,
    "cumulativeGross" int   NOT NULL,
    "percentOfyear" string   NOT NULL,
    "Releases" int   NOT NULL,
    "Average" int   NOT NULL,
    "holidayGross" float   NOT NULL,
    "holidayReleases" float   NOT NULL,
    "netGross" float   NOT NULL,
    "netReleases" float   NOT NULL
);

