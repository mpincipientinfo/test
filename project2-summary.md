I created an interactive game where betting is made easy.
Fans can bet on their favorite sports (on speicifc match) without having to understand betting terms.

### challenges
It is not related to front-end but related to APIs. I don't have control over third party APIs & that made it challenging & time consuming.

As per requirement to show matches with the required flow we had to implement using rapid APIs. Obviously if you are creating bet then it should display only upcoming matches. I was unable to find such rapid API which returns matches for all types of sports with all required filters (filter by league, by date, name etc.)

I searched a lot and I found that http://betsapi.com/ will be usefull as it gives number of APIs with all filters we need to fulfil flow. But I was not allowed to use it, I could only use rapid API. 

To overcome this, I added filters mannually. API was giving me date & league name so I searched for all league IDs and I stored them at my code which was really time consuming but I had no other option. I was also not able to fetch all records at single time (API is returning only 50 & there were average 800-1000 records for each league ) which made this mannual filter more time consuming but at the end finally requirement was fulfilled and that's what matters most.
