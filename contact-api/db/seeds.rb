# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Contact.create!([
    {
        firstName: "Roxanna",
        lastName: "Covolini",
        email: "rcovolini0@gmpg.org",
        phone: "595-747-2226",
        tags: "work",
        picture: "",
        favourite:true
        }, {
        firstName: "Kenna",
        lastName: "Oxer",
        email: "koxer1@xing.com",
        phone: "628-590-3716",
        tags: "school,home",
        picture: "",
        favourite:false
        }, {
        firstName: "Pauline",
        lastName: "Chree",
        email: "pchree2@qq.com",
        phone: "737-669-8862",
        tags: "family",
        picture: "https://thumb1.shutterstock.com/display_pic_with_logo/330511/128709044/stock-photo-business-woman-portrait-crossed-arms-128709044.jpg",
        favourite:true
        }, {
        firstName: "Shaine",
        lastName: "Ghio",
        email: "sghio3@multiply.com",
        phone: "332-772-0157",
        tags: "home",
        picture: "",
        favourite:false
        }, {
        firstName: "Lanny",
        lastName: "Gregorowicz",
        email: "lgregorowicz4@google.co.uk",
        phone: "461-961-0058",
        tags: "work",
        picture: "https://www.photocase.com/photos/285296-human-being-youth-young-adults-business-masculine-photocase-stock-photo-large.jpeg",
        favourite:true
    }
])