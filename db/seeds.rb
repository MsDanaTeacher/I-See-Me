require 'faker'

User.destroy_all
BookCollection.destroy_all 
Follow.destroy_all
UserBook.destroy_all

puts 'seeding users'

User.create(name: 'Dana', grade: 'second grade teacher', email: 'danalobell@gmail.com', username: 'msdana', password: 'abc')
User.create(name: 'Emily', grade: 'first grade teacher', email: 'emily@gmail.com', username: 'msemily', password: 'abc')
User.create(name: 'Tom', grade: 'kindergarten teacher', email: 'tom@gmail.com', username: 'mrtom', password: 'abc')
User.create(name: 'Jake', grade: 'third grade teacher', email: 'jake@gmail.com', username: 'mrjake', password: 'abc')
User.create(name: 'Brittney', grade: 'second grade teacher', email: 'brittney@gmail.com', username: 'msbrittney', password: 'abc')
User.create(name: 'Sage', grade: 'first grade teacher', email: 'sage@gmail.com', username: 'mssage', password: 'abc')
User.create(name: 'Zak', grade: 'third grade teacher', email: 'zak@gmail.com', username: 'mrzak', password: 'abc')
User.create(name: 'Tony', grade: 'third grade teacher', email: 'tony@gmail.com', username: 'mrtony', password: 'abc')
User.create(name: 'John', grade: 'kindergarten teacher', email: 'john@gmail.com', username: 'mrjohn', password: 'abc')
User.create(name: 'Maisy', grade: 'second grade teacher', email: 'maisy@gmail.com', username: 'msmaisy', password: 'abc')

puts 'users seeded'

puts 'book collection seeding'

BookCollection.create(title: 'Girls Who Code', author: 'Jo Whittemore', subject: 'Girls in Tech', image: 'https://images4.penguinrandomhouse.com/cover/9780399542534', banned: true)
BookCollection.create(title: 'This Day in June', author: 'Gayle Pitman', subject: 'LGBTQIA+', image: 'https://www.epl.org/wp-content/uploads/2021/09/this-day-in-june.jpg', banned: true)
BookCollection.create(title: 'The Family Book', author: 'Todd Parr', subject: 'Families', image: 'https://www.toddparr.com/wp-content/uploads/2020/07/9780316187107-1.jpg?fit=450%2C450', banned: true)
BookCollection.create(title: 'Drama', author: 'Raina Telgemeier', subject: 'LGBTQIA+', image: 'https://images.squarespace-cdn.com/content/v1/5a2495ad8a02c7c08b0dcc3f/1513476639170-W3KXNQD7TTD2GK4CY56W/DRAMA_cover_shadow.jpg?format=1000w', banned: true)
BookCollection.create(title: 'Saffron Ice Cream', author: 'Rashin Kheiriyeh', subject: 'Middle Eastern', image: 'https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9781338150520/primary/renditions/700', banned: false)
BookCollection.create(title: 'When I Coloured in the World', author: 'Ahmadreza Ahmadi', subject: 'Middle Eastern', image: 'https://tinyowl.co.uk/wp-content/uploads/2017/01/WICW-new-coverLR-600x599.jpg', banned: false)
BookCollection.create(title: 'The Secret Message', author: 'Mina Javaherbin', subject: 'Middle Eastern', image: 'https://minajavaherbin.net/wp-content/uploads/2019/10/secretmessage.jpg', banned: false)
BookCollection.create(title: "It Ain't So Awful, Falafel", author: 'Firoozeh Dumas', subject: 'Middle Eastern', image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781328740960_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D', banned: false)
BookCollection.create(title: 'The Green Musician', author: 'Mahvash Shahegh', subject: 'Middle Eastern', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438813991l/25721005.jpg', banned: false)
BookCollection.create(title: 'Persepolis: The Story of a Childhood', author: 'Marjane Satrapi', subject: 'Middle Eastern', image: 'https://s39361.pcdn.co/wp-content/uploads/2017/03/9780375714573-persopolis-203x300.jpg', banned: false)
BookCollection.create(title: 'The Colors of Us', author: 'Karen Katz', subject: 'Celebrating Skin Color', image: 'https://mpd-biblio-covers.imgix.net/9780805071634.jpg?w=300', banned: false)
BookCollection.create(title: 'All the Colors We Are: The Story of How We Get Our Skin Color', author: 'Katie Kissinger', subject: 'Celebrating Skin Color', image: 'https://s39361.pcdn.co/wp-content/uploads/2017/04/9781605540795_all-the-colors-we-are-300x232.jpg', banned: false)
BookCollection.create(title: 'The Skin You Live In', author: 'Michael Tyler', subject: 'Celebrating Skin Color', image: 'https://images.squarespace-cdn.com/content/v1/5beb22573917ee0ad11974b0/1594318676951-8VPMZGTQFJ34S9JU7FCB/CCM-SkinYouLiveIn.cov-72d.RGB.jpg?format=750w', banned: false)
BookCollection.create(title: 'Skin Again', author: 'Bell Hooks', subject: 'Celebrating Skin Color', image: 'https://bellhooksbooks.com/wp-content/uploads/2018/08/Skin-Again-500.jpg', banned: false)
BookCollection.create(title: 'Shades of People', author: 'Shelley Rotner', subject: 'Celebrating Skin Color', image: 'https://www.shelleyrotner.com/admin/wp-content/uploads/2011/10/shades-cover.jpg', banned: false)
BookCollection.create(title: 'Pretty Melanin Me!', author: 'Markita Richards', subject: 'Celebrating Skin Color', image: 'https://www.afriwarebooks.com/uploads/1/6/3/7/16375858/s205239500165048604_p3032_i1_w1037.jpeg', banned: false)
BookCollection.create(title: 'Skin Like Mine', author: 'LaTashia M. Perry', subject: 'Celebrating Skin Color', image: 'https://mijabooks.com/wp-content/uploads/2020/12/Skin-Like-Mine.jpg', banned: false)
BookCollection.create(title: 'More Than Peach', author: 'Bellen Woodard', subject: 'Celebrating Skin Color', image: 'https://embed.cdn.pais.scholastic.com/v1/channels/clubs-us/products/identifiers/isbn/9781338863147/primary/renditions/900', banned: false)
BookCollection.create(title: 'Skin we are in', author: 'Sindiwe Magona & Nina G. Jablonski', subject: 'Celebrating Skin Color', image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781485624899_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D', banned: false)
BookCollection.create(title: 'Happy in Our Skin', author: 'Fran Manushkin', subject: 'Celebrating Skin Color', image: 'https://cdn.booktrust.org.uk/globalassets/images/book-jackets/h/happy-in-our-skin.jpg?preset=book_large&anchor=middlecenter', banned: false)
BookCollection.create(title: 'Your Name is a Song', author: 'Jamilah Thompkins-Bigelow', subject: 'African, African American', image: 'https://images.squarespace-cdn.com/content/v1/5734ec209f7266f8a847dc52/1574362869789-VGD4XOGP5C488BWPDU70/Your_Name-is-a-Song-Oversized_Jacket-New-Artwork-Sept2019.jpg', banned: false)
BookCollection.create(title: 'Not So Fast, Songololo', author: 'Niki Daly', subject: 'African, African American', image: 'https://www.publishersweekly.com/cover/9780689503672', banned: false)
BookCollection.create(title: 'The Water Princess', author: 'Susan Verde', subject: 'African, African American', image: 'https://images3.penguinrandomhouse.com/cover/9780399172588', banned: false)
BookCollection.create(title: 'Emmanuel’s Dream: The True Story of Emmanuel Ofosu', author: 'Laurie Ann Thompson', subject: 'African, African American', image: 'https://s39361.pcdn.co/wp-content/uploads/2017/03/9780449817445-Emmanuels-Dream.jpg', banned: false)
BookCollection.create(title: 'Make Way for Dyamonde Daniel', author: 'Nikki Grimes', subject: 'African, African American', image: 'https://images4.penguinrandomhouse.com/cover/9780142415559', banned: false)
BookCollection.create(title: 'The Snowy Day', author: 'Ezra Jack Keats', subject: 'African, African American', image: 'https://www.ezra-jack-keats.org/wp-content/uploads/2013/12/The_Snowy_Day_Book_Cover.jpg', banned: false)
BookCollection.create(title: 'One Plastic Bag: Isatou Ceesay and the Recycling Women of the Gambia', author: 'Miranda Paul', subject: 'African, African American', image: 'http://oneplasticbag.com/wp-content/uploads/2014/10/One_Plastic_Bag_Cover_Miranda_Paul1-300x253.jpg', banned: false)
BookCollection.create(title: 'Gogo’s List', author: 'Portia Dery', subject: 'African, African American', image: 'https://jacana.co.za/wp-content/uploads/2021/02/GOGOS-LIST-COV-ENG-HR-RGB-1-scaled.jpg', banned: false)
BookCollection.create(title: "Stacey's Extraordinary Words", author: 'Stacey Abrams', subject: 'African, African American', image: 'https://d1ldy8a769gy68.cloudfront.net/300/978/006/320/947/3/9780063209473.jpg', banned: false)
BookCollection.create(title: 'Glow', author: 'Ruth Forman', subject: 'African, African American', image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534446335/glow-9781534446335_lg.jpg', banned: false)
BookCollection.create(title: 'Fry Bread: A Native American Family Story', author: 'Kevin Noble Maillard', subject: 'American Indian', image: 'https://mpd-biblio-covers.imgix.net/9781626727465.jpg?w=900', banned: false)
BookCollection.create(title: 'We Are Water Protectors', author: 'Carole Lindstrom', subject: 'American Indian', image: 'https://mpd-biblio-covers.imgix.net/9781250203557.jpg?w=900', banned: false)
BookCollection.create(title: 'Classified: The Secret Career of Mary Golda Ross, Cherokee Aerospace Engineer', author: 'Traci Sorell', subject: 'American Indian', image: 'https://s39361.pcdn.co/wp-content/uploads/2021/11/Classified.png', banned: false)
BookCollection.create(title: 'Jo Jo Makoons: The Used-To-Be Best Friend', author: 'Dawn Quigley', subject: 'American Indian', image: 'https://images-us.bookshop.org/ingram/9780063015388.jpg?height=500&v=v2', banned: false)
BookCollection.create(title: 'Sharice’s Big Voice: A Native Kid Becomes a Congresswoman', author: 'Sharice Davids & Nancy K. Mays', subject: 'American Indian', image: 'https://s39361.pcdn.co/wp-content/uploads/2021/09/Sharices-Big-Voice_large-300x245.png', banned: false)
BookCollection.create(title: 'When the Shadbush Blooms', author: 'Carla Messinger & Susan Katz', subject: 'American Indian', image: 'https://pictures.abebooks.com/isbn/9781582461922-us.jpg', banned: false)
BookCollection.create(title: 'Young Water Protectors: A Story About Standing Rock', author: 'Aslan Tudor & Kelly Tudor', subject: 'American Indian', image: 'https://s39361.pcdn.co/wp-content/uploads/2021/08/Young-Water-Protectors-232x300.png', banned: false)
BookCollection.create(title: 'We Are Still Here!: Native American Truths Everyone Should Know', author: 'Traci Sorell', subject: 'American Indian', image: 'https://images-us.bookshop.org/ingram/9781623541927.jpg?height=500&v=v2', banned: false)
BookCollection.create(title: 'When I Was Eight', author: 'Christy Jordan-Fenton & Margaret Pokiak-Fenton', subject: 'American Indian', image: 'https://s39361.pcdn.co/wp-content/uploads/2017/11/When-I-Was-Eight-9781554514915.jpg', banned: false)
BookCollection.create(title: 'This Land Is My Land', author: 'George Littlechild', subject: 'American Indian', image: 'https://s39361.pcdn.co/wp-content/uploads/2019/10/This-Land-is-My-Land.png', banned: false)
BookCollection.create(title: 'My Name Is Yoon', author: 'Helen Recorvits', subject: 'Asian American & Pacific Islander', image: 'https://mpd-biblio-covers.imgix.net/9781250057112.jpg?w=900', banned: false)
BookCollection.create(title: 'Alvin Ho: Allergic to Babies, Burglars, and Other Bumps in the Night', author: 'Lenore Look', subject: 'Asian American & Pacific Islander', image: 'https://images3.penguinrandomhouse.com/cover/9780385386005', banned: false)
BookCollection.create(title: 'Danbi Leads the School Parade', author: 'Anna Kim', subject: 'Asian American & Pacific Islander', image: 'https://images2.penguinrandomhouse.com/cover/9780451478894', banned: false)
BookCollection.create(title: 'How to Solve a Problem', author: 'Ashima Shiraishi', subject: 'Asian American & Pacific Islander', image: 'https://images1.penguinrandomhouse.com/cover/9781524773274', banned: false)
BookCollection.create(title: 'My Day with Gong Gong', author: 'Sennah Yee', subject: 'Asian American & Pacific Islander', image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781773214283_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D', banned: false)
BookCollection.create(title: 'Ohana Means Family', author: 'Ilima Loomis', subject: 'Asian American & Pacific Islander', image: 'https://images4.penguinrandomhouse.com/cover/9780823451180', banned: false)
BookCollection.create(title: "Shark Lady: The True Story of How Eugenie Clark Became the Ocean's Most Fearless Scientist", author: 'Jess Keating', subject: 'Asian American & Pacific Islander', image: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/1937729/settings_images/tuYRx2Q8SKObYNUwwNA8_SharkLadyFinalCoverSmall.jpg', banned: false)
BookCollection.create(title: 'Asian Americans Who Inspire Us', author: 'Analiza Wolf', subject: 'Asian American & Pacific Islander', image: 'https://images-us.bookshop.org/ingram/9780578578156.jpg?height=500&v=v2', banned: false)
BookCollection.create(title: 'Measuring Up', author: 'Lily LaMotte', subject: 'Asian American & Pacific Islander', image: 'https://cdn.teachingbooks.net/content/ingram_images_hi/8/0062973878.jpg', banned: false)
BookCollection.create(title: 'Eyes that Kiss in the Corners', author: 'Joanna Ho', subject: 'Asian American & Pacific Islander', image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780062915627_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D', banned: false)
BookCollection.create(title: 'Ada Twist, Scientist', author: 'Andrea Beaty', subject: 'Girls in Tech', image: 'https://media.edutopia.org/styles/responsive_300px_original/s3/masters/d7_images/minero-inset4-yabooks-pr.jpg', banned: false)
BookCollection.create(title: 'Ada: My First Ada Lovelace (Little People, Big Dreams)', author: 'Maria Isabel Sanchez Vegara', subject: 'Girls in Tech', image: 'https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/y/my_first_ada.jpg', banned: false)
BookCollection.create(title: 'Mae Among The Stars', author: 'Roda Ahmed', subject: 'Girls in Tech', image: 'https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/mae_1.jpg', banned: false)
BookCollection.create(title: 'I Am Marie Curie', author: 'Brad Meltzer', subject: 'Girls in Tech', image: 'https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/1/912swfl8kwl_1_.jpg', banned: false)
BookCollection.create(title: 'Anne and Her Tower of Giraffes: The Adventurous Life of the First Giraffologist', author: 'Karlin Gray', subject: 'Girls in Tech', image: 'https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/o/tower_of_giraffes.jpg', banned: false)
BookCollection.create(title: 'The Astronaut With A Song For The Stars: The Story of Dr. Ellen Ochoa', author: 'Julia Finley Mosca', subject: 'Girls in Tech', image: 'https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/song_for_the_stars.jpg', banned: false)
BookCollection.create(title: 'Secret Engineer: How Emily Roebling Built the Brooklyn Bridge', author: 'Rachel Dougherty', subject: 'Girls in Tech', image: 'https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/e/secret_engineer_smaller.jpg', banned: false)
BookCollection.create(title: 'Counting on Katherine: How Katherine Johnson Saved Apollo 13', author: 'Helaine Becker', subject: 'Girls in Tech', image: 'https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/counting_on_katherine.jpg', banned: false)
BookCollection.create(title: 'Queen of Physics: How Wu Chien Shiung Helped Unlock the Secrets of the Atom', author: 'Teresa Robeson', subject: 'Girls in Tech', image: 'https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/q/u/queen_of_physics.jpg', banned: false)
BookCollection.create(title: 'Wonder', author: 'R.J. Palacio', subject: 'Persons with Disabilities', image: 'https://images-na.ssl-images-amazon.com/images/I/71C7PBhlB9L.jpg', banned: false)
BookCollection.create(title: 'Thank You, Mr. Falker', author: 'Patricia Polacco', subject: 'Persons with Disabilities', image: 'https://images-na.ssl-images-amazon.com/images/I/91-pkhhHBlL.jpg', banned: false)
BookCollection.create(title: 'El Deafo', author: 'Cece Bell', subject: 'Persons with Disabilities', image: 'https://images-na.ssl-images-amazon.com/images/I/61FIps1446L.jpg', banned: false)
BookCollection.create(title: 'Rescue & Jessica: A Life Changing Friendship', author: 'Jessica Kensky', subject: 'Persons with Disabilities', image: 'https://images-na.ssl-images-amazon.com/images/I/91-+ff45LWL.jpg', banned: false)
BookCollection.create(title: 'Soul Surfer: A True Story of Faith, Family, and Fighting to Get Back on the Board', author: 'Bethany Hamilton', subject: 'Persons with Disabilities', image: 'https://images-na.ssl-images-amazon.com/images/I/71oEbnpczxL.jpg', banned: false)
BookCollection.create(title: 'When Charley Met Emma', author: 'Amy Webb', subject: 'Persons with Disabilities', image: 'https://images-na.ssl-images-amazon.com/images/I/51jfhFtVwiL._SX403_BO1,204,203,200_.jpg', banned: false)
BookCollection.create(title: 'Just Ask: Be Different, Be Brave, Be You', author: 'Sonia Sotomayor', subject: 'Persons with Disabilities', image: 'https://www.rebekahgienapp.com/wp-content/uploads/2022/03/just-ask.jpg', banned: false)
BookCollection.create(title: 'My Three Best Friends and Me, Zulay', author: 'Cari Best', subject: 'Persons with Disabilities', image: 'https://www.rebekahgienapp.com/wp-content/uploads/2019/12/my_best_friends.jpg', banned: false)
BookCollection.create(title: 'I Talk Like a River', author: 'Jordan Scott', subject: 'Persons with Disabilities', image: 'https://www.rebekahgienapp.com/wp-content/uploads/2019/12/I_talk_like_river.jpg', banned: false)
BookCollection.create(title: 'My Travelin’ Eye', author: 'Jenny Sue Kostecki-Shaw', subject: 'Persons with Disabilities', image: 'https://www.rebekahgienapp.com/wp-content/uploads/2019/12/my_travelin_eye.jpg', banned: false)
BookCollection.create(title: 'The Proudest Blue A Story of Hijab and Family', author: 'Ibtihaj Muhammad with S.K. Ali', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2019/10/The-Proudest-Blue-A-Story-of-Hijab-and-Family-225x225.jpg', banned: false)
BookCollection.create(title: 'Mommy’s Khimar', author: 'Jamilah Thompkins-Bigelow', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2020/06/Mommys-Khimar-289x225.jpg', banned: false)
BookCollection.create(title: 'Under My Hijab', author: 'Hena Khan', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2019/03/Under-My-Hijab-271x225.jpg', banned: false)
BookCollection.create(title: 'Like the Moon Loves the Sky', author: 'Hena Khan', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2020/03/Like-the-Moon-Loves-the-Sky-715x790.jpg', banned: false)
BookCollection.create(title: 'Halal Hot Dogs', author: 'Susannah Azia', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2021/06/Halal-Hot-Dogs-715x845.jpeg', banned: false)
BookCollection.create(title: 'Crescent Moons and Pointed Minarets: A Muslim Book of Shapes', author: 'Hena Khan', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2018/04/Crescent-Moons-and-Pointed-Minarets-A-Muslim-Book-of-Shapes-276x225.jpg', banned: false)
BookCollection.create(title: 'The Arabic Quilt: An Immigrant Story', author: 'Aya Khalil', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2020/04/The-Arabic-Quilt-An-Immigrant-Story-715x792.jpg', banned: false)
BookCollection.create(title: 'One Green Apple', author: 'Eve Bunting', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2016/03/one-green-apple.jpg', banned: false)
BookCollection.create(title: 'Malala’s Magic Pencil', author: 'Malala Yousafzai', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2017/11/Malalas-Magic-Pencil.jpg', banned: false)
BookCollection.create(title: 'Amira’s Picture Day', author: 'Reem Faruqi', subject: 'Muslim', image: 'https://imaginationsoup.net/wp-content/uploads/2022/05/Amiras-Picture-Day-715x715.jpeg', banned: false)
BookCollection.create(title: 'Lola Levine meets Jelly and Bean', author: 'Monica Brown', subject: 'Jewish', image: 'http://lolalevine.net/wp-content/uploads/2017/02/lolaJellyBean.jpg', banned: false)
BookCollection.create(title: 'Chik Chak Shabbat', author: 'Mara Rockliff', subject: 'Jewish', image: 'https://www.whatdowedoallday.com/wp-content/uploads/2022/02/jewpb-chik-chak-shabbat.jpeg', banned: false)
BookCollection.create(title: 'A Hat for Mrs.Goldman', author: 'Michelle Edwards', subject: 'Jewish', image: 'https://www.whatdowedoallday.com/wp-content/uploads/2022/02/jewpb-hat-for-mrs-goldman.jpeg', banned: false)
BookCollection.create(title: 'Yaffa and Fatima Shalom, Salaam', author: 'Fawzia Gilani-Williams', subject: 'Jewish', image: 'https://www.whatdowedoallday.com/wp-content/uploads/2022/02/jewpb-yaffa.jpeg', banned: false)
BookCollection.create(title: 'The Treasure', author: 'Uri Shulevitz', subject: 'Jewish', image: 'https://www.whatdowedoallday.com/wp-content/uploads/2022/02/jewpb-the-treasure.jpeg', banned: false)
BookCollection.create(title: 'Bagels from Benny', author: 'Aubrey Davis', subject: 'Jewish', image: 'https://www.whatdowedoallday.com/wp-content/uploads/2022/02/jewpb-bagels-from-benny.jpeg', banned: false)
BookCollection.create(title: 'I Dissent: Ruth Bader Ginsburg Makers Her Mark', author: 'Debbie Levy', subject: 'Jewish', image: 'https://www.whatdowedoallday.com/wp-content/uploads/2022/02/i-dissent-book-cover.jpeg', banned: false)
BookCollection.create(title: 'The Book Rescuer', author: 'Sue Macy', subject: 'Jewish', image: 'https://www.whatdowedoallday.com/wp-content/uploads/2020/11/pbold-book-rescuer-1.jpg', banned: false)
BookCollection.create(title: 'You Never Heard of Sandy Koufax?!', author: 'Jonah Winter', subject: 'Jewish', image: 'https://www.whatdowedoallday.com/wp-content/uploads/2022/02/sandy-koufax.jpeg', banned: false)
BookCollection.create(title: 'Jewish Just Like You', author: 'Kylie Ora Lobell', subject: 'Jewish', image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51vbcXrVgAL._SX398_BO1,204,203,200_.jpg', banned: false)
BookCollection.create(title: "Téo's Tutu", author: 'Maryann Jacob Macias', subject: 'LGBTQIA+', image: 'https://images.randomhouse.com/cover/9781984815521', banned: false)
BookCollection.create(title: 'Born Ready: The True Story of a Boy Named Penelope', author: 'Jodie Patterson', subject: 'LGBTQIA+', image: 'https://images4.penguinrandomhouse.com/cover/9780593123638', banned: false)
BookCollection.create(title: 'I Am Jazz', author: 'Jessica Herthel & Jazz Jenning', subject: 'LGBTQIA+', image: 'https://images1.penguinrandomhouse.com/cover/9780803741072', banned: false)
BookCollection.create(title: 'Pride: The Story of Harvey Milk and the Rainbow Flag', author: 'Rob Sanders', subject: 'LGBTQIA+', image: 'https://images3.penguinrandomhouse.com/cover/9780399555312', banned: false)
BookCollection.create(title: 'Prince & Knight', author: 'Daniel Haack', subject: 'LGBTQIA+', image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781499810950/prince-knight-9781499810950_lg.jpg', banned: false)
BookCollection.create(title: 'George', author: 'Alex Gino', subject: 'LGBTQIA+', image: 'https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780545812573/primary/renditions/700', banned: false)
BookCollection.create(title: 'Better Nate Than Ever', author: 'Tim Federle', subject: 'LGBTQIA+', image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534429130/better-nate-than-ever-9781534429130_lg.jpg', banned: false)
BookCollection.create(title: 'I am Billie Jean King', author: 'Brad Meltzer', subject: 'LGBTQIA+', image: 'https://images3.penguinrandomhouse.com/cover/9780735228740', banned: false)
BookCollection.create(title: 'Abuelita and I Make Flan', author: 'Adriana Hernández Bergstrom', subject: 'Latinx', image: 'https://s39361.pcdn.co/wp-content/uploads/2022/06/Abuelita-and-I-Make-Flan-241x300.png', banned: false)
BookCollection.create(title: 'Alma and How She Got Her Name', author: 'Juana Martinez-Neal', subject: 'Latinx', image: 'https://s39361.pcdn.co/wp-content/uploads/2018/06/alma.jpg', banned: false)
BookCollection.create(title: 'Areli Is a Dreamer: A True Story by Areli Morales', author: 'Areli Morales', subject: 'Latinx', image: 'https://images4.penguinrandomhouse.com/cover/9781984893994', banned: false)
BookCollection.create(title: 'Coquí in the City', author: 'Nomar Perez', subject: 'Latinx', image: 'https://images4.penguinrandomhouse.com/cover/9780593109038', banned: false)
BookCollection.create(title: 'Julián at the Wedding', author: 'Jessica Love', subject: 'Latinx', image: 'https://images2.penguinrandomhouse.com/cover/9781536212389', banned: false)
BookCollection.create(title: 'Looking for Bongo', author: 'Eric Velasquez', subject: 'Latinx', image: 'https://images2.penguinrandomhouse.com/cover/9780823437672', banned: false)
BookCollection.create(title: 'My Papi Has a Motorcycle', author: 'Isabel Quintero', subject: 'Latinx', image: 'https://images2.penguinrandomhouse.com/cover/9780525553410', banned: false)
BookCollection.create(title: "Rudas: Nino's Horrendous Hermanitas", author: 'Yuyi Morales', subject: 'Latinx', image: 'https://mpd-biblio-covers.imgix.net/9781626722408.jpg?w=900', banned: false)
BookCollection.create(title: 'Tito Puente: Mambo King', author: 'Monica Brown', subject: 'Latinx', image: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780545858847/primary/renditions/700', banned: false)
BookCollection.create(title: 'Roses for Isabella', author: 'Diana Cohn', subject: 'Latinx', image: 'https://img.thriftbooks.com/api/images/m/1a627242810f990c52ebe61e5bf1027b331a205c.jpg', banned: false)
BookCollection.create(title: 'The Librarian of Basra: A True Story from Iraq', author: 'Jeanette Winter', subject: 'Middle Eastern', image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780358141839_p0_v5_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D', banned: false)
BookCollection.create(title: 'The Stars in My Geddoh’s Sky', author: 'Claire Sidhom Matze', subject: 'Middle Eastern', image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51HVV4YGSNL._SX365_BO1,204,203,200_.jpg', banned: false)
BookCollection.create(title: 'Snow in Jerusalem', author: 'Deborah Da Costa', subject: 'Middle Eastern', image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71lMS-mBAIL._AC_UY218_.jpg', banned: false)
BookCollection.create(title: 'My Father’s Shop', author: 'Satomi Ichikawa', subject: 'Middle Eastern', image: 'https://d3myrwj42s63no.cloudfront.net/300/192/913/299/9/1929132999.jpg', banned: false)
BookCollection.create(title: 'Lailah’s Lunchbox: A Ramadan Story', author: 'Reem Faruqi', subject: 'Middle Eastern', image: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0884484319&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=pragmom01-20', banned: false)
BookCollection.create(title: "Yuvi's Candy Tree", author: 'Lesley Simpson', subject: 'Middle Eastern', image: 'https://pjlibrary.org/PJLibrary/media/PJ-Library/books/yuvis-candy-tree.png', banned: false)
BookCollection.create(title: 'Love Makes a Family', author: 'Sophie Beer', subject: 'Families', image: 'https://images.randomhouse.com/cover/9780525554226', banned: false)
BookCollection.create(title: 'Donovan’s Big Day', author: 'Leslea Newman', subject: 'Families', image: 'https://s18670.pcdn.co/wp-content/uploads/Donovans-Big-Day.jpg', banned: false)
BookCollection.create(title: 'The Great Big Book of Families', author: 'Mary Hoffman', subject: 'Families', image: 'https://images4.penguinrandomhouse.com/cover/9780803735163', banned: false)
BookCollection.create(title: 'One Family', author: 'George Shannon', subject: 'Families', image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/517rmrZiJkL.jpg', banned: false)
BookCollection.create(title: 'Mixed Me!', author: 'Taye Diggs', subject: 'Families', image: 'https://media.theeverymom.com/wp-content/uploads/2018/10/the-everymom-family-books-20.jpg', banned: false)
BookCollection.create(title: 'Do You Sing Twinkle?', author: 'Sandra Levins', subject: 'Families', image: 'https://media.theeverymom.com/wp-content/uploads/2018/10/the-everymom-family-books-19.jpg', banned: false)
BookCollection.create(title: 'Over the Moon', author: 'Karen Katz', subject: 'Families', image: 'https://media.theeverymom.com/wp-content/uploads/2018/10/the-everymom-family-books-6.jpg', banned: false)
BookCollection.create(title: 'Love Is A Family', author: 'Roma Downey', subject: 'Families', image: 'https://media.theeverymom.com/wp-content/uploads/2018/10/the-everymom-family-books-10.jpg', banned: false)
BookCollection.create(title: 'Stella Brings the Family', author: 'Miriam B. Schiffer', subject: 'Families', image: 'https://media.theeverymom.com/wp-content/uploads/2018/10/the-everymom-family-books-14.jpg', banned: false)
BookCollection.create(title: 'Our Skin: A First Conversation About Race', author: 'Megan Madison & Jessica Ralli', subject: 'Social Justice', image: 'https://images4.penguinrandomhouse.com/cover/9780593519394', banned: false)
BookCollection.create(title: 'Peaceful Fights for Equal Rights', author: 'Rob Sanders', subject: 'Social Justice', image: 'https://www.booksourcebanter.com/wp-content/uploads/Peaceful-Fights-for-Equal-Rights-497x500.jpg', banned: false)
BookCollection.create(title: 'Rise Up! The Art of Protest', author: 'Jo Rippon', subject: 'Social Justice', image: 'https://www.booksourcebanter.com/wp-content/uploads/Rise-Up-416x500.jpg', banned: false)
BookCollection.create(title: 'Voices of Justice: Poems About People Working for A Better World', author: 'George Ella Lyon', subject: 'Social Justice', image: 'https://www.booksourcebanter.com/wp-content/uploads/Voices-of-Justice-410x500.jpg', banned: false)
BookCollection.create(title: 'Antiracist Baby', author: 'Ibram X. Kendi', subject: 'Social Justice', image: 'https://images.squarespace-cdn.com/content/v1/6036bf6d46a72e136be8eee1/1614296752705-B9TFPMBKJ04G12BSHDXC/Antiracist+Baby.jpg', banned: false)
BookCollection.create(title: 'Change Sings', author: 'Amanda Gorman', subject: 'Social Justice', image: 'https://images4.penguinrandomhouse.com/cover/9780593203224', banned: false)
BookCollection.create(title: "Woke: A Young Poet's Call to Justice", author: 'Mahogany L. Browne with Elizabeth Acevedo & Olivia Gatwood', subject: 'Social Justice', image: 'https://mpd-biblio-covers.imgix.net/9781250311207.jpg?w=900', banned: false)
BookCollection.create(title: 'We Shall Overcome: The Story of a Song', author: 'Debbie Levy', subject: 'Social Justice', image: 'https://images.squarespace-cdn.com/content/v1/5f29b0069d47f939f090dd87/1597689250580-00Z970G7XJI7LU0UX13X/WSO+from+LBYR.jpg?format=500w', banned: false)
BookCollection.create(title: 'Grandfather Gandhi', author: 'Arun Gandhi & Bethany Hegedus', subject: 'Social Justice', image: 'https://www.rebekahgienapp.com/wp-content/uploads/2017/01/grandfather_gandhi.jpg', banned: false)
BookCollection.create(title: 'Separate Is Never Equal: Sylvia Mendez and Her Family’s Fight for Desegregation', author: 'Duncan Tonatiuh', subject: 'Social Justice', image: 'https://www.rebekahgienapp.com/wp-content/uploads/2017/01/separate_never_equal.jpg', banned: false)

puts 'book collection seeded'

puts 'seeding user books'

35.times do
    UserBook.create(
        rating: rand(1..5),
        user_id: User.all.sample.id,
        book_collection_id: BookCollection.all.sample.id,
        discussion_questions: Faker::Lorem.sentence,
        student_anecdotes: Faker::Lorem.sentence
    )
end

puts 'user books seeded'

puts 'seeding follows'

35.times do
    Follow.create(
        follower_id: User.all.sample.id,
        followee_id: User.all.sample.id
    )
end

puts 'follows seeded'

