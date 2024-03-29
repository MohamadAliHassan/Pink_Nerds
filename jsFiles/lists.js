const menuArray = [
        {
          "id": "the-gramercy-tavern-burger-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Gramercy Tavern",
          "dsc": "The Gramercy Tavern Burger - 4 Pack",
          "price": 99,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "shake-shack-shackburger-8-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Shake Shack",
          "dsc": "Shake Shack ShackBurger® – 8 Pack",
          "price": 49,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "gotts-cheeseburger-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132933/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Gott's Roadside",
          "dsc": "Gott's Complete Cheeseburger Kit for 4",
          "price": 99,
          "rate": 5,
          "country": "St. Helena, CA"
        },
        {
          "id": "le-big-matt-kit-for-6",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Emmy Squared",
          "dsc": "Le Big Matt Burger Kit for 6",
          "price": 99,
          "rate": 5,
          "country": "Brooklyn, NY"
        },
        {
          "id": "shake-shack-shackburger-16-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Shake Shack",
          "dsc": "Shake Shack Shackburger® – 16 Pack",
          "price": 89,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "wagyu-burger-patties-12-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107019/wagyu-burger-patties-12-pack.6116f4cd648dee20651f99e21e7d758b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Westholme Wagyu",
          "dsc": "Wagyu Burger Patties - 12 Pack",
          "price": 129,
          "rate": 5,
          "country": "Queensland, Australia"
        },
        {
          "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Peter Luger Steak House",
          "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
          "price": 175.95,
          "rate": 4,
          "country": "Brooklyn, NY"
        },
        {
          "id": "burger-bomb-kit-for-6",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133829/burger-bomb-kit-for-6.b0430200cfc153c1c15c7997236a6152.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Old Homestead Steakhouse",
          "dsc": "Burger Bomb Kit for 6",
          "price": 129,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "double-stack-burger-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Holeman & Finch",
          "dsc": "Double Stack Burger Kit for 4",
          "price": 79,
          "rate": 4,
          "country": "Atlanta, GA"
        },
        {
          "id": "goldbelly-burger-bash-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66179/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Pat LaFrieda Meats",
          "dsc": "Goldbelly \"Burger Bash\" Pack",
          "price": 109,
          "rate": 5,
          "country": "North Bergen, NJ"
        },
        {
          "id": "burger-au-poivre-kit-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Raoul's",
          "dsc": "Burger Au Poivre Kit - 4 Pack",
          "price": 99,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "goldbelly-burger-blend-4-lbs",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96214/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Flannery Beef",
          "dsc": "Goldbelly Burger Blend - 4 lbs.",
          "price": 79,
          "rate": 5,
          "country": "San Rafael, CA"
        },
        {
          "id": "gotts-complete-cheeseburger-kit-for-8",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133967/gotts-complete-cheeseburger-kit-for-8.092aa049d00286fa1733d720decc782e.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Gott's Roadside",
          "dsc": "Gott's Complete Cheeseburger Kit for 8",
          "price": 149,
          "rate": 4,
          "country": "St. Helena, CA"
        },
        {
          "id": "gramercy-tavern-burger-kielbasa-combo",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135126/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Gramercy Tavern",
          "dsc": "Gramercy Tavern Burger + Kielbasa Combo",
          "price": 149,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "classic-juicy-lucy-burgers-sweet-potato-puffs-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114296/classic-juicy-lucy-burgers-sweet-potato-puffs-4-pack.b726cfe63b6e1584a4e3c01db24f97d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "5-8 Club",
          "dsc": "Classic Juicy Lucy Burgers + Sweet Potato Puffs - 4 Pack",
          "price": 99,
          "rate": 5,
          "country": "Minneapolis, MN"
        },
        {
          "id": "juicy-lucy-burger-kit-5-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132203/juicy-lucy-burger-kit-5-pack.2902a0c8549449529e87f902f425f9ae.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Whitmans",
          "dsc": "Juicy Lucy Burger Kit - 5 Pack",
          "price": 79,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "blue-aged-cheddar-jalapeno-burgers-6-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124204/blue-aged-cheddar-jalapeno-burgers-6-pack.a8e79d575c4a6883a0a4daed6a18b635.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Old Homestead Steakhouse",
          "dsc": "Blue Aged Cheddar Jalapeno Burgers - 6 Pack",
          "price": 139,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "wagyu-burger-patties-6-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106998/wagyu-burger-patties-6-pack.7837b88faa095c92a0a1a00414296beb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Westholme Wagyu",
          "dsc": "Wagyu Burger Patties - 6 Pack",
          "price": 89,
          "rate": 5,
          "country": "Queensland, Australia"
        },
        {
          "id": "american-wagyu-burger-party-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109633/american-wagyu-burger-party-pack.6bb259a1c95c067d5da9a1057a9517e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Holy Grail Steak Co.",
          "dsc": "American Wagyu Burger Party Pack",
          "price": 199,
          "rate": 5,
          "country": "San Francisco, CA"
        },
        {
          "id": "best-damn-cheeseburger-kit",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134005/best-damn-cheeseburger-kit-8-pack.0c2ca295cc1b754d2867651184a07140.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "4505 Burgers & BBQ",
          "dsc": "Best Damn Cheeseburger Kit - 8 Pack",
          "price": 89,
          "rate": 5,
          "country": "San Francisco, CA"
        },
        {
          "id": "foie-gras-teriyaki-burger-kit-8-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137097/Hall-by-Odo-Foie-Gras-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "HALL by Odo",
          "dsc": "Foie Gras Teriyaki Burger Kit - 8 Pack",
          "price": 139,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "juicy-lucifer-burger-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120623/juicy-lucifer-burger-kit-for-4.5a231c2ed989431218aa6062ff89b20a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Hell's Kitchen",
          "dsc": "Juicy Lucifer Burger Kit for 4",
          "price": 79,
          "rate": 4,
          "country": "Minneapolis, MN"
        },
        {
          "id": "le-pig-mac-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106701/le-pig-mac-kit-for-4.d9b274673ffc1a1a2035c9573291cae2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Cochon Butcher",
          "dsc": "Le Pig Mac Kit for 4",
          "price": 109,
          "rate": 4,
          "country": "New Orleans, LA"
        },
        {
          "id": "juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132910/juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-4-pack.c2994c945ac66b003c7763c4b3fd5255.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "5-8 Club",
          "dsc": "Juicy Lucy Burgers + Sweet Potato Puffs - Choose Your Own 4 Pack",
          "price": 99,
          "rate": 5,
          "country": "Minneapolis, MN"
        },
        {
          "id": "the-cheeseburger-wellington-2-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132490/the-burger-wellington-2-pack.eb53bc9ad74634bb0c5da44bc55f9362.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Wellingtons LA",
          "dsc": "\"The Cheeseburger\" Wellington - 2 Pack",
          "price": 59,
          "rate": 4,
          "country": "Los Angeles, CA"
        },
        {
          "id": "dry-aged-blend-burgers",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103715/dry-aged-blend-burgers.90e05b1839eff99eb724e7d6265e84f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Master Purveyors",
          "dsc": "Dry-Aged Blend Burgers",
          "price": 54,
          "rate": 5,
          "country": "Bronx, NY"
        },
        {
          "id": "double-stack-burger-kit-for-2",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132733/handf-double-stack-burger-kit-for-2.4ecf6b1bee6b0ecef3b82606860a1b5b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Holeman & Finch",
          "dsc": "Double Stack Burger Kit for 2",
          "price": 49,
          "rate": 4,
          "country": "Atlanta, GA"
        },
        {
          "id": "the-gold-label-burger-4-patties-6oz-each-15-lbs",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/130074/the-gold-label-burger-4-patties-6oz-each-15-lbs.492945fff05ba5f036eca31df024d22f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Pat LaFrieda Meats",
          "dsc": "Gold Label Burger",
          "price": 69,
          "rate": 5,
          "country": "North Bergen, NJ"
        },
        {
          "id": "legendary-cheesy-western-burger-kit-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131302/legendary-cheesy-western-burger-kit-4-pack.393ceddb3bca3acd862e762e48e4c207.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Texas Inn",
          "dsc": "Legendary \"Cheesy Western\" Burger Kit - 4 Pack",
          "price": 59,
          "rate": 4,
          "country": "Lynchburg, VA"
        },
        {
          "id": "foie-gras-teriyaki-wagyu-burger-kit-8-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137099/Hall-by-Odo-Burger-Combo.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "HALL by Odo",
          "dsc": "Foie Gras Teriyaki + Wagyu Burger Kit - 8 Pack",
          "price": 119,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "keens-burger-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105255/keens-burger-kit-for-4.862e70d1671202747d23f732f3453c81.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Keens Steakhouse",
          "dsc": "Keens Burger Kit for 4",
          "price": 99,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "16001-100-fullblood-wagyu-beef-ground-beef",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134623/100-fullblood-wagyu-beef-ground-beef.3ce763ed33cc05cddecc1978cb197a7e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Lone Mountain Wagyu",
          "dsc": "100% Fullblood Wagyu Beef Ground Beef",
          "price": 69,
          "rate": 5,
          "country": "Golden, NM"
        },
        {
          "id": "the-cheeseburger-wellington-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131557/the-burger-wellington-4-pack.aca42e69c68050d853d94eb5d4076dac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Wellingtons LA",
          "dsc": "\"The Cheeseburger\" Wellington - 4 Pack",
          "price": 89,
          "rate": 5,
          "country": "Los Angeles, CA"
        },
        {
          "id": "17663-mesquite-smoked-brisket-burger-patties-sauce",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131538/mesquite-smoked-brisket-burger-patties-dry-rub.628f7434c98a870a57b36c0c1dc4ec3f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Davila's BBQ",
          "dsc": "Mesquite Smoked Brisket Burger Patties + Dry Rub",
          "price": 89,
          "rate": 5,
          "country": "Seguin, TX"
        },
        {
          "id": "gotts-impossible-burger-kit-for-8",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129127/gott-s-impossible-burger-kit-for-8.83516ceaacc8918f0ccad6575a6b8425.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Gott's Roadside",
          "dsc": "Gott’s Impossible™ Burger Kit for 8",
          "price": 169,
          "rate": 4,
          "country": "St. Helena, CA"
        },
        {
          "id": "goldbelly-steak-burger-sampler",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133612/goldbelly-steak-burger-sampler.30f9703bf7c2355cffa8846e328481d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Pat LaFrieda Meats",
          "dsc": "Goldbelly Steak + Burger Sampler",
          "price": 135,
          "rate": 5,
          "country": "North Bergen, NJ"
        },
        {
          "id": "hall-signature-wagyu-burger-kit-8-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137095/Hall-by-Odo-Signature-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "HALL by Odo",
          "dsc": "HALL Signature Wagyu Burger Kit - 8 Pack",
          "price": 99,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "gourmet-burger-box-12-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97480/gourmet-burger-box-12-pack.a35a99e7afd03e8d1f5d3bf2eb33c46a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Alewel's Country Meats",
          "dsc": "Gourmet Burger Box - 12 Pack",
          "price": 89,
          "rate": 5,
          "country": "Warrensburg, MO"
        },
        {
          "id": "foie-gras-teriyaki-burger-kit-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137098/Hall-by-Odo-Foie-Gras-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "HALL by Odo",
          "dsc": "Foie Gras Teriyaki Burger Kit - 4 Pack",
          "price": 89,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "hall-signature-wagyu-burger-kit-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137096/Hall-by-Odo-Signature-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "HALL by Odo",
          "dsc": "HALL Signature Wagyu Burger Kit - 4 Pack",
          "price": 69,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "burger-patty-assortment-12-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108388/burger-patty-assortment-12-pack.1a508c39aa7b49a00c1c4349f88670a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Rocker Bros. Meat & Provisions",
          "dsc": "Burger Patty Assortment - 12 Pack",
          "price": 39,
          "rate": 5,
          "country": "Los Angeles, CA"
        },
        {
          "id": "gotts-roadside-impossible-burger-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135117/IB_Burgers_2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "The Impossible Foods Shop",
          "dsc": "Gott’s Roadside Impossible™ Burger Kit for 4",
          "price": 109,
          "rate": 4,
          "country": "Oakland, CA"
        },
        {
          "id": "short-rib-blend-burgers",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103717/short-rib-blend-burgers.a078c983a9ba2b3628a944a0c885ae14.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Master Purveyors",
          "dsc": "Short Rib Blend Burgers",
          "price": 52,
          "rate": 5,
          "country": "Bronx, NY"
        },
        {
          "id": "classic-shrimp-burgers",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112675/classic-shrimp-burgers.965772a8abe95e6e5579e86312d74de6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Big Shake's Hot Chicken",
          "dsc": "Classic Shrimp Burgers",
          "price": 79,
          "rate": 4,
          "country": "Franklin, TN"
        },
        {
          "id": "moobys-meal-kit-6-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134095/moobys-meal-kit-6-pack.d0e1a6e3dd32eb2673b5df60c3db1818.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Mooby's",
          "dsc": "Mooby's Meal Kit - 6 Pack",
          "price": 79,
          "rate": 5,
          "country": "Los Angeles, CA"
        },
        {
          "id": "juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-8-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132978/juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-8-pack.54ad2dc40fb4708ec1b6e5c3ccdf2f89.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "5-8 Club",
          "dsc": "Juicy Lucy Burgers + Sweet Potato Puffs - Choose Your Own 8 Pack",
          "price": 149,
          "rate": 5,
          "country": "Minneapolis, MN"
        },
        {
          "id": "mesquite-smoked-brisket-burger-patties-hot-links-dry-rub",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79492/mesquite-smoked-brisket-burger-patties-hot-links-dry-rub.41cbe9a5d29f1a4ef3491ab6eb8713a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Davila's BBQ",
          "dsc": "Mesquite Smoked Brisket Burger Patties + Hot Links + Dry Rub",
          "price": 109,
          "rate": 4,
          "country": "Seguin, TX"
        },
        {
          "id": "hatch-green-chile-cheeseburger-kit-6-pack",
          "img": "https://goldbelly.imgix.net/uploads/product_image/image/25753/green-chile-cheeseburger-6-pack.f3b980b43c8661e8fac3634b082668a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Sparky's Hatch Green Chile Burgers",
          "dsc": "Hatch Green Chile Cheeseburger Kit - 6 Pack",
          "price": 109,
          "rate": 5,
          "country": "Hatch, NM"
        },
        {
          "id": "Giant-cheese-burger-potstickers-6-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97098/giant-cheese-burger-potstickers-6-pack.36899150ea75b8869bc2bd46ad126a57.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Shirley Chung's Ms. Chi",
          "dsc": "Giant Cheese Burger Potstickers - 6 Pack",
          "price": 69,
          "rate": 4,
          "country": "Los Angeles, CA"
        },
        {
          "id": "juicy-lucy-burger-kit-10-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105731/juicy-lucy-burger-kit-10-pack.41d77903b061d6c6b080f990b4ad2fb7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Whitmans",
          "dsc": "Juicy Lucy Burger Kit - 10 Pack",
          "price": 129,
          "rate": 5,
          "country": "New York, NY"
        },
        {
          "id": "vegan-burger-grill-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105946/vegan-burger-grill-kit-for-4.1450ccef8c44f7394c93f58450ce67b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Lekka Burger",
          "dsc": "Vegan Burger Grill Kit for 4",
          "price": 79,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "classic-juicy-lucy-burgers-sweet-potato-puffs-8-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114319/classic-juicy-lucy-burgers-sweet-potato-puffs-8-pack.36c8d716563c1af2d2ca1c1140d36273.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "5-8 Club",
          "dsc": "Classic Juicy Lucy Burgers + Sweet Potato Puffs - 8 Pack",
          "price": 149,
          "rate": 5,
          "country": "Minneapolis, MN"
        },
        {
          "id": "brisket-burger-8-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124922/short-rib-burger-blend.6275c3ffad67f0e93de4eafbc4f809df.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Pat LaFrieda Meats",
          "dsc": "Brisket Burger - 8 Pack",
          "price": 31.9,
          "rate": 5,
          "country": "North Bergen, NJ"
        },
        {
          "id": "bfbol-original-blend-burger-8-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124841/original-blend-burger.50bb5cf520d3f653b0b80187716cc3e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Pat LaFrieda Meats",
          "dsc": "Original Blend Burger - 8 Pack",
          "price": 31.9,
          "rate": 5,
          "country": "North Bergen, NJ"
        },
        {
          "id": "ribeye-burger-patties-6-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133972/ribeye-burger-patties-6-pack.dd62bc3b8a096f15429571865ba5d561.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Rocker Bros. Meat & Provisions",
          "dsc": "Ribeye Burger Patties - 6 Pack",
          "price": 45,
          "rate": 4,
          "country": "Los Angeles, CA"
        },
        {
          "id": "raouls-steak-and-burgers-au-poivre-kit-2-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133421/raouls-burgers-and-steaks-au-poivre-kit.aeafc64d55d6ad7274cb8ba1b562f8eb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Raoul's",
          "dsc": "Raoul's Burgers and Steaks Au Poivre Kit",
          "price": 249,
          "rate": 4,
          "country": "New York, NY"
        },
        {
          "id": "bfbsr-short-rib-burger-8-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132398/short-rib-burger-blend.586f10c35edd4d7c6e9cfa41e3b2d0d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Pat LaFrieda Meats",
          "dsc": "Short Rib Burger - 8 Pack",
          "price": 36,
          "rate": 4,
          "country": "North Bergen, NJ"
        },
        {
          "id": "gotts-impossible-burger-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133852/gott-s-impossible-burger-kit-for-4.1170c94bac2ddef7de0c52cd7df6e0a3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Gott's Roadside",
          "dsc": "Gott’s Impossible™ Burger Kit for 4",
          "price": 109,
          "rate": 5,
          "country": "St. Helena, CA"
        },
        {
          "id": "famous-french-bread-burger-fries-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129511/burger-fries-kit-for-4.ffc10e462cadece50d64f8ce5fd8ea7a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Rotier's Restaurant",
          "dsc": "Famous French Bread Burger + Fries Kit for 4",
          "price": 99,
          "rate": 4,
          "country": "Nashville, TN"
        },
        {
          "id": "vegan-burger-patties-12-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119472/vegan-burger-patties-12-pack.56f31f18b126e7f84b02b6f1babd5d12.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Burgerlords",
          "dsc": "Vegan Burger Patties - 12 Pack",
          "price": 79,
          "rate": 4,
          "country": "Los Angeles, CA"
        },
            
        {
            "id": "stone-porter-beer-pork-chops-6-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85748/stone-porter-beer-pork-chops-6-pack.dbfc6a8cd00795a869c9f9900a20401f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Seaside Market",
            "dsc": "Stone Porter Beer Pork Chops - 6 Pack",
            "price": 149,
            "rate": 4,
            "country": "Cardiff by the Sea, CA"
          },
          {
            "id": "papaya-king-tropical-drink",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Papaya King",
            "dsc": "Papaya King - Tropical Drink",
            "price": 69,
            "rate": 4,
            "country": "New York, NY"
          },
          {
            "id": "234234-frrrozen-hot-chocolate",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134225/frrrozen-hot-chocolate.867217d2781ea3db60b7ea2b116f9cd8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Serendipity",
            "dsc": "Frrrozen Hot Chocolate",
            "price": 29,
            "rate": 5,
            "country": "New York, NY"
          },
          {
            "id": "15702-frrrozen-salted-caramel-hot-chocolate",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133019/frrrozen-salted-caramel-hot-chocolate.1efee40abefcefda7716fa965375f399.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Serendipity",
            "dsc": "Frrrozen Salted Caramel Hot Chocolate",
            "price": 29,
            "rate": 5,
            "country": "New York, NY"
          },
          {
            "id": "003-bender-charleston-bloody-mary-mix-bold-and-spicy",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66370/bender-charleston-bloody-mary-mix-bold-and-spicy.72a356456124c0663bd8c0d9110414b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Charleston Beverage Company",
            "dsc": "Bender | Charleston Bloody Mary Mix Bold & Spicy",
            "price": 59,
            "rate": 5,
            "country": "Charleston, SC"
          },
          {
            "id": "lil-easy-nola-cold-brew-12-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132671/lil-easy-nola-cold-brew-12-pack.f80c2041d4720acb3f099e41bab2b436.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Grady's Cold Brew",
            "dsc": "Lil' Easy NOLA Cold Brew - 12 Pack",
            "price": 40,
            "rate": 4,
            "country": "New York, NY"
          },
          {
            "id": "hot-dogs-tropical-drink",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133348/papaya-king-hot-dogs-tropical-drink.0e00794e37b13765181d2d7f0785cd9a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Papaya King",
            "dsc": "Papaya King Hot Dogs + Tropical Drink",
            "price": 99,
            "rate": 4,
            "country": "New York, NY"
          },

          {
            "id": "2-lou-malnatis-deep-dish-pizzas",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Lou Malnati's Pizza",
            "dsc": "2 Lou Malnati's Deep Dish Pizzas",
            "price": 67.99,
            "rate": 4,
            "country": "Chicago, IL"
          },
          {
            "id": "23699-choose-your-own-thin-crust-pizza-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Bartolini’s",
            "dsc": "Choose Your Own Thin Crust Pizza - 4 Pack",
            "price": 139,
            "rate": 4,
            "country": "Chicago, IL"
          },
          {
            "id": "choose-your-own-new-haven-style-pizza-6-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Zuppardi's Apizza",
            "dsc": "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
            "price": 79,
            "rate": 4,
            "country": "West Haven, CT"
          },
          {
            "id": "6-lou-malnatis-deep-dish-pizzas",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106829/6-lou-malnatis-deep-dish-pizzas.f59993181da5d295668c8a6fb856055e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Lou Malnati's Pizza",
            "dsc": "6 Lou Malnati's Deep Dish Pizzas",
            "price": 116.99,
            "rate": 4,
            "country": "Chicago, IL"
          },
          {
            "id": "wood-fired-pizzas-best-seller-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Pizzeria Bianco",
            "dsc": "Wood Fired Pizzas Best Seller - 4 Pack",
            "price": 129,
            "rate": 5,
            "country": "Phoenix, AZ"
          },
          {
            "id": "236991-choose-your-own-deep-dish-pizza-3-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133398/choose-your-own-deep-dish-pizza-3-pack.4111791511244a4946bb5c9ad2c17da9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Bartolini’s",
            "dsc": "Choose Your Own Deep Dish Pizza - 3 Pack",
            "price": 139,
            "rate": 5,
            "country": "Chicago, IL"
          },
          {
            "id": "choose-your-own-detroit-style-pizza-3-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132973/detroit-style-pizza-choose-your-own-3-pack.6b6f4909ffd4066d5471e70eac5c3d89.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Emmy Squared",
            "dsc": "Detroit-Style Pizza - Choose Your Own 3 Pack",
            "price": 89,
            "rate": 4,
            "country": "Brooklyn, NY"
          },
          {
            "id": "brooklyn-pizza-choose-your-own-5-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104938/brooklyn-pizza-choose-your-own-5-pack.edc4f476a75207d0af840ce6f225f2b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Paesan’s Pizza",
            "dsc": "Brooklyn Pizza - Choose Your Own 5 Pack",
            "price": 69,
            "rate": 4,
            "country": "Albany, NY"
          },
          {
            "id": "choose-your-own-chicago-deep-dish-pizza-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "My Pi Pizza",
            "dsc": "Chicago Deep Dish Pizza - 4 Pack",
            "price": 129,
            "rate": 5,
            "country": "Chicago, IL"
          },
          {
            "id": "4-lou-malnatis-deep-dish-pizzas",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106828/4-lou-malnatis-deep-dish-pizzas.8c79eb7506b5752ab3387d8174246b17.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Lou Malnati's Pizza",
            "dsc": "4 Lou Malnati's Deep Dish Pizzas",
            "price": 96.99,
            "rate": 4,
            "country": "Chicago, IL"
          },
          {
            "id": "tonys-custom-pizza-3-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131555/choose-your-own-pizza-3-pack.fcf7a43e38593007ef2857fe16d6dd26.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Tony's Pizza Napoletana",
            "dsc": "Choose Your Own Pizza - 3 Pack",
            "price": 99,
            "rate": 5,
            "country": "San Francisco, CA"
          },
          {
            "id": "plain-thin-crust-pizza-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115101/plain-thin-crust-pizza-4-pack.5540e9d166db2f0853643c6517e4a225.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "The Columbia Inn",
            "dsc": "Plain Thin Crust Pizza - 4 Pack",
            "price": 79,
            "rate": 5,
            "country": "Montville, NJ"
          },
          {
            "id": "brooklyn-pizza-choose-your-own-10-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104883/brooklyn-pizza-choose-your-own-10-pack.7ddeb3b5b599ec9c7b1befcc9c14a1c0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Paesan’s Pizza",
            "dsc": "Brooklyn Pizza - Choose Your Own 10 Pack",
            "price": 99,
            "rate": 4,
            "country": "Albany, NY"
          },
          {
            "id": "new-haven-style-mozzarella-pizza-6-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132144/new-haven-style-mozzarella-pizza-6-pack.8e8a38db57935f5cb6afa4202b966135.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Zuppardi's Apizza",
            "dsc": "New Haven-Style Mozzarella Pizza - 6 Pack",
            "price": 78,
            "rate": 5,
            "country": "West Haven, CT"
          },
          {
            "id": "choose-your-own-3-pizzas",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133289/choose-your-own-3-pizzas.a6de480878c0b3b9f4d240bacbb665e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Heggies Pizza",
            "dsc": "Choose Your Own - 3 Pizzas",
            "price": 79,
            "rate": 4,
            "country": "Milaca, MN"
          },
          {
            "id": "17408-coal-oven-margherita-pizza-pie-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72343/coal-oven-margherita-pizza-pie-4-pack.c5944293e17b40f2659562179b493a10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Table 87 Pizza",
            "dsc": "Coal Oven Margherita Pizza - 4 Pies",
            "price": 79,
            "rate": 5,
            "country": "Brooklyn, NY"
          },
          {
            "id": "15464-detroit-style-pizza-squares-choose-your-own-3-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112202/detroit-style-pizza-squares-choose-your-own-3-pack.75f7714d9a81fb455f7400086e4195bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Buddy's Pizza",
            "dsc": "Detroit-Style Pizza Squares - Choose Your Own 3 Pack",
            "price": 99,
            "rate": 4,
            "country": "Detroit, MI"
          },
          {
            "id": "15952-create-your-own-pizza-3-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133262/choose-your-own-pizza-3-pack.7ee3cc9bbc48b97a0f66e073d4071982.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Detroit Style Pizza Co",
            "dsc": "Detroit Pizza - Choose Your Own Pizza 3 Pack",
            "price": 85,
            "rate": 4,
            "country": "Detroit, MI"
          },
          {
            "id": "pan-style-deep-dish-pizza-choose-your-own-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137057/Pequods-CYO-4-Pack-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Pequod's Pizza",
            "dsc": "Pan-Style Deep Dish Pizza - Choose Your Own 4 Pack",
            "price": 119,
            "rate": 4,
            "country": "Chicago, IL"
          },
          {
            "id": "buffalo-style-pepperoni-pizza-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133315/buffalo-style-pepperoni-pizza-2-pack.38d99af16bc34554992bbed53870e533.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Picasso's Pizza",
            "dsc": "Buffalo Style Pepperoni Pizza - 2 Pack",
            "price": 89,
            "rate": 5,
            "country": "Buffalo, NY"
          },
          {
            "id": "neapolitan-pizza-choose-your-own-3-Pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119426/neapolitan-pizza-choose-your-own-3-pack.dada483ad51fe8e1f8b06c68a8f1356f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Motorino Pizzeria",
            "dsc": "Neapolitan Pizza - Choose Your Own 3 Pack",
            "price": 99,
            "rate": 4,
            "country": "New York, NY"
          },
          {
            "id": "16940-brick-oven-pizza-6-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71222/wood-fired-pizza-6-pack.1124121a87723161fcd034de9256cd22.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Roberta's Pizza",
            "dsc": "Wood Fired Pizza 6 Pack",
            "price": 119,
            "rate": 5,
            "country": "Brooklyn, NY"
          },
          {
            "id": "thin-crust-pizza-choose-your-own-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118791/thin-crust-pizza-choose-your-own-4-pack.c9d8f813e752cb2a77b93e02752c5daf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Bill's Pizza & Pub",
            "dsc": "Thin Crust Pizza - Choose Your Own 4 Pack",
            "price": 119,
            "rate": 4,
            "country": "Chicago, IL"
          },
          {
            "id": "ny-style-pizza-choose-your-own-3-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132421/ny-style-pizza-choose-your-own-3-pack.6364a762aa92bd037cc1519037680fef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Rubirosa Pizza",
            "dsc": "NY Style Pizza - Choose Your Own 3 Pack",
            "price": 99,
            "rate": 4,
            "country": "New York, NY"
          },
          {
            "id": "choose-your-own-chicago-deep-dish-pizza-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89920/chicago-deep-dish-pizza-2-pack.258bfa1979e758e45ffc2c93043540e5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "My Pi Pizza",
            "dsc": "Chicago Deep Dish Pizza - 2 Pack",
            "price": 99,
            "rate": 4,
            "country": "Chicago, IL"
          },
          {
            "id": "pizza-choose-your-own4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131566/pizza-choose-your-own-4-pack.92a5ef9f5f219eb870cf7e909656545d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Regina Pizzeria",
            "dsc": "Pizza - Choose Your Own 4 Pack",
            "price": 99,
            "rate": 4,
            "country": "Boston, MA"
          },
          {
            "id": "17409-coal-oven-margherita-pizza-slices-8-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134133/coal-oven-margherita-pizza-8-slices.a6e3c0e43bf45c956014f064e25735cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Table 87 Pizza",
            "dsc": "New York Pizza - 8 Giant Slices",
            "price": 79,
            "rate": 5,
            "country": "Brooklyn, NY"
          },
          {
            "id": "2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106830/2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake.f791b76ca45f684a6c0512aa4aec56aa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Lou Malnati's Pizza",
            "dsc": "2 Lou Malnati's Deep Dish Pizzas + Lezza Chocolate Cake",
            "price": 104.99,
            "rate": 4,
            "country": "Chicago, IL"
          },
          {
            "id": "thin-crust-pizza-choose-your-own-6-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116162/thin-crust-pizza-choose-your-own-6-pack.9d724e00f69d761845f7edf0f66698d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "The Columbia Inn",
            "dsc": "Thin Crust Pizza - Choose Your Own 6 Pack",
            "price": 99,
            "rate": 5,
            "country": "Montville, NJ"
          },
          {
            "id": "neapolitan-pizza-choose-your-own-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131291/neapolitan-pizza-choose-your-own-4-pack.e9e370c647523cb3b6a8ee6f60c9a9c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Pizzeria Delfina",
            "dsc": "Neapolitan Pizza - Choose Your Own 4 Pack",
            "price": 119,
            "rate": 5,
            "country": "San Francisco, CA"
          },
          {
            "id": "Sausage-pizza-6-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133501/sausage-pizza-6-pack.31fa94213da11ab58951fcc7838f6754.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Zuppardi's Apizza",
            "dsc": "New Haven-Style Sausage Pizza - 6 Pack",
            "price": 79,
            "rate": 5,
            "country": "West Haven, CT"
          },
          {
            "id": "original-cheese-new-york-pizza-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104910/cheese-neapolitan-pizza-2-pack.856b6b14d276981a4654e1bb348cb328.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Joe & Pats Pizzeria",
            "dsc": "Original Cheese New York Pizza - 2 Pack",
            "price": 79,
            "rate": 4,
            "country": "Staten Island, NY"
          },
          {
            "id": "chicago-deep-dish-pizza-3-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101630/chicago-deep-dish-pizza-choose-your-own-3-pack.b795d4f915c116ba9e7f2e7951e79ad0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Gino's East",
            "dsc": "Chicago Deep Dish Pizza Box - Choose Your Own 3 Pack",
            "price": 89,
            "rate": 5,
            "country": "Chicago, IL"
          },
          {
            "id": "choose-your-own-bar-pizza-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133147/choose-your-own-bar-pizza-4-pack.2576e0f60267c680022bd3466542bb9e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Cape Cod Cafe Pizza",
            "dsc": "Bar Pizza - 4 Pack - Choose Your Own",
            "price": 89,
            "rate": 5,
            "country": "Brockton, MA"
          },
          {
            "id": "16939-brick-oven-pizza-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71231/wood-fired-pizza-4-pack.8818b2e71ad1149790d0c03413d11996.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Roberta's Pizza",
            "dsc": "Wood Fired Pizza 4 Pack",
            "price": 89,
            "rate": 4,
            "country": "Brooklyn, NY"
          },
          {
            "id": "signature-sampler",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134789/signature-sampler-serves-10.2d7375635d9152e3401a0daacd40f648.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Bonci Pizza",
            "dsc": "Signature Pizza Sampler - Serves 10",
            "price": 129,
            "rate": 5,
            "country": "Chicago, IL"
          },
          {
            "id": "choose-your-own-6-pizzas",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82735/choose-your-own-6-pizzas.5e9950eb1a06f3b87543f867506511b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Heggies Pizza",
            "dsc": "Choose Your Own - 6 Pizzas",
            "price": 119,
            "rate": 5,
            "country": "Milaca, MN"
          },
          {
            "id": "pan-style-deep-dish-pizza-choose-your-own-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137018/Pequods-CYO-2-Pack-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Pequod's Pizza",
            "dsc": "Pan-Style Deep Dish Pizza - Choose Your Own 2 Pack",
            "price": 75,
            "rate": 5,
            "country": "Chicago, IL"
          },
          {
            "id": "wood-fired-pizza-choose-your-own-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133839/pizza-choose-your-own-2-pack.0820d0d4642ddb9fbda63e2394b63932.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Arthur Avenue Wood Fired Pizza",
            "dsc": "Wood Fired Pizza - Choose Your Own 2 Pack",
            "price": 65,
            "rate": 5,
            "country": "Pleasantville, NY"
          },
          {
            "id": "chicago-style-pizza-buy-3-get-1-free",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135044/chicago-style-pizza-choose-your-own-3-pack.c97386b561818a977030178b06fa5bda.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Sam's Coal Fired Pizza",
            "dsc": "Chicago Style Pizza - Buy 3 + Get 1 FREE Cheese Pizza",
            "price": 99,
            "rate": 5,
            "country": "Daytona Beach, FL"
          },
          {
            "id": "neapolitan-pizza-choose-your-own-6-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131875/wood-fired-pizza-choose-your-own-6-pack.fa6cf8ffff1241d50c27d804e566d605.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Pasquale Jones",
            "dsc": "Neapolitan Pizza - Choose Your Own 6 Pack",
            "price": 129,
            "rate": 5,
            "country": "New York, NY"
          },
          {
            "id": "wood-fired-pizza-choose-your-own-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104006/wood-fired-pizza-choose-your-own-4-pack.e36692807e17618a646885a8087a4c97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Pizzeria Bianco",
            "dsc": "Wood Fired Pizza - Choose Your Own 4 Pack",
            "price": 135,
            "rate": 5,
            "country": "Phoenix, AZ"
          },
          {
            "id": "buffalo-style-pepperoni-pizza-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131666/buffalo-style-pepperoni-pizza-4-pack.1c5ea10d8c7176f0ad4eef363a1f3543.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Picasso's Pizza",
            "dsc": "Buffalo Style Pepperoni Pizza - 4 Pack",
            "price": 139,
            "rate": 4,
            "country": "Buffalo, NY"
          },
          {
            "id": "15318-make-your-own-old-forge-pizza-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67763/make-your-own-old-forge-pizza-2-pack.f7cd011e9c2ac3182dbe1e3470985354.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Arcaro & Genell",
            "dsc": "Make Your Own Old Forge Pizza 2 Pack",
            "price": 89,
            "rate": 4,
            "country": "Old Forge, PA"
          },
          {
            "id": "pizza-choose-your-own-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134259/pizza-choose-your-own-4-pack.bc138c4f695f74bf78f13204865a9c5b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Slim & Husky's",
            "dsc": "Pizza - Choose Your Own 4 Pack",
            "price": 99,
            "rate": 5,
            "country": "Nashville, TN"
          },
          {
            "id": "spicy-spring-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/product_image/image/61943/spicy-spring-2-pies-serves-16.fd9e6f0fce7306a15ec794b7d91f7056.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Prince Street Pizza",
            "dsc": "Spicy Spring™ - 2 Pies (Serves 16)",
            "price": 124.95,
            "rate": 5,
            "country": "New York, NY"
          },
          {
            "id": "cheese-pizza-5-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134099/cheese-pizza-5-pack.e22243aba836daa325ee1b563fc2ca36.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Paesan’s Pizza",
            "dsc": "Classic Cheese Pizza - 5 Pack",
            "price": 69,
            "rate": 5,
            "country": "Albany, NY"
          },
          {
            "id": "detroit-style-pizza-best-seller-3-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131672/detroit-style-pizza-best-seller-3-pack.f56562a340b3ada0a8a571fa80020304.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Emmy Squared",
            "dsc": "Detroit-Style Pizza - Best Seller 3 Pack",
            "price": 89,
            "rate": 4,
            "country": "Brooklyn, NY"
          },
          {
            "id": "famous-pizza-making-kit",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134230/famous-pizza-making-kit.74d1d16b7fa71a2acbd36f825d84d75b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Tony Boloney's",
            "dsc": "Famous Pizza Making Kit",
            "price": 89,
            "rate": 5,
            "country": "Hoboken, NJ"
          },
          {
            "id": "famous-artichoke-pizza-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/80601/artichoke-basilles-pizza-2-pack.3e8f5b94405720ed1c0ef2765c5b0669.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Artichoke Basille's Pizza",
            "dsc": "Famous Artichoke Pizza - 2 Pack",
            "price": 119,
            "rate": 4,
            "country": "New York, NY"
          },
          {
            "id": "brooklyn-pizza-best-seller-5-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131936/brooklyn-pizza-best-seller-5-pack.8434f2ef7ad80ef2c5bef19f1ecb94ba.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Paesan’s Pizza",
            "dsc": "Brooklyn Pizza Best Seller - 5 Pack",
            "price": 69,
            "rate": 5,
            "country": "Albany, NY"
          },
          {
            "id": "neapolitan-pizza-choose-your-own-3-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114414/neapolitan-pizza-choose-your-own-3-pack.5b29cea22f1eeee4b8d95057b9bc7abd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Pizzeria Delfina",
            "dsc": "Neapolitan Pizza - Choose Your Own 3 Pack",
            "price": 99,
            "rate": 5,
            "country": "San Francisco, CA"
          },
          {
            "id": "pepperoni-ny-style-pizza-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108219/pepperoni-ny-style-pizza-2-pack.77685b4dbd4cea75fa8e8b8ac59ba2b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Rubirosa Pizza",
            "dsc": "Pepperoni NY Style Pizza - 2 Pack",
            "price": 89,
            "rate": 5,
            "country": "New York, NY"
          },
          {
            "id": "chicago-deep-dish-pizza-2-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102327/chicago-deep-dish-pizza-2-pack.e5052999d72a3737ba464a03d51b33dc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Labriola Chicago",
            "dsc": "Chicago Deep Dish Pizza - Choose Your Own 2 Pack",
            "price": 89,
            "rate": 4,
            "country": "Chicago, IL"
          } 
]

const userCardsTemplate = document.querySelector("data-dish-template"); 

const dishCard = userCardsTemplate.textContent.cloneNode(true);

console.log(dishCard);