# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




#THIS IS THE ORIGINAL SEED ONLY COMMENT IN IF YOU WANT A FULL WIPE



# User.destroy_all
# Profile.destroy_all
# Comment.destroy_all
# Friend.destroy_all
#
# password = 'password'
# names = ['emma', 'baxter', 'maisy']
# email = ['emma@bork.com', 'baxter@hoplife.com', 'maisy@ardsley.com']
#
# bob = User.create!(name: 'Bob Borker', email: 'demouser@facebork.com', password: password)
# Profile.create(user_id: bob.id)
#
# profiles = []
#
# users = names.map.with_index do |name, idx|
#   u = User.create!(name: name, email: email[idx], password: password)
#   profiles << Profile.new(user_id: u.id)
#   u
# end
#
# bdays = ['November 5 2014', 'April 13 2012', 'August 15, 2000']
# job_title = ['Queen', 'hopper', 'HouseBabe']
# lives_in = ['Ossining', 'Spanish Harlem', 'The Great Farm In The Sky']
# relationship_status = ['owned', 'free man', 'loved']
# owners_names = ['Mike and Maria', 'Yolo Martinez', 'The Leinwands']
# breed = ['Havanese', 'Eastern Cottontail', 'Cavalier King Charles Spaniel']
# fav_toy = ['Bone', 'Paper Towel Roll', 'Bone']
# descriptions = ['A Good Girle, the best girl, and angel from heaven. Queen of the andals, mother of dragons, breaker of chains', 'totally a dog a i swear (bamboozle acheived)', 'i liek turtals']
#
#
# profiles.each_with_index do |profile, idx|
#   profile.update!(birthday: bdays[idx], job_title: job_title[idx], lives_in: lives_in[idx], relationship_status: relationship_status[idx],
#     owners_names: owners_names[idx], breed: breed[idx], fav_toy: fav_toy[idx], description: descriptions[idx])
# end
#
# authors = [users[0], users[0], users[1]]
# walls = [users[0], users[1], users[0]]
# bodys = ['first post', 'bork bork', 'yolozaddy']
#
# posts = authors.map.with_index do |author, idx|
#   Post.create(author_id: author.id, wall_id: walls[idx].id, body: bodys[idx])
# end

#####END OF ORIGINAL SEED

########################################### Dog User
######### Dog name and password
def get_name
  "#{Faker::Dog.name} #{Faker::Dog.name}"
end
password = 'password'
FINALID = User.last.id

emails = []

100.times do |i|
  emails << "borker#{i + FINALID}@bork.com"
end


######### avi and cover photo url

avi_array = [
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_00.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_01.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_02.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_03.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_04.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_05.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_06.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_07.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_08.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_09.jpg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_10.jpeg',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_prof/prof_11.jpeg',
]


cover_array = [
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_00.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_01.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_02.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_03.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_04.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_05.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_06.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_07.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_08.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_09.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_10.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_11.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_12.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_13.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_14.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_15.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_16.png',
  'https://s3.us-east-2.amazonaws.com/seedphotos/faceborkcoverphotos/seed_cover/cover_17.png'
]





############################################# Dog Profile



def get_birthday
  f = Faker::Date.between(15.years.ago, 1.year.ago)
  Date::ABBR_MONTHNAMES[f.month] + ' ' + f.day.to_s + ' ' + f.year.to_s
end

job_titles = ['Seeing eye dog', 'Security', 'Ballboy', 'Housepupper', 'Frendo', 'Athlete',
  'Borkstar', 'Instagram Celeb', 'Gardener', 'Animal Catcher', 'Judge', "Borker", 'Woofer', 'Scaredo', 'Woodsboi', 'Hunter', 'Couch Potato', 'Retired', 'Military']

def get_relationship_status
  if rand(10) > 0
    'Forever Home'
  else
    'In Shelter'
  end
end

def get_owners_names
  owners = [Faker::Name.name]
  if rand(10) > 3
    owners << Faker::Name.name
  end
  owners.join(' and ')
end

def get_lives_in
  Faker::Address.city
end

def get_breed
  Faker::Dog.breed
end

fav_toys = ['ball', 'bone', 'shoe', 'football', 'box', 'bed', 'rope', 'pizza', 'gorilla', 'skunk', 'plushy', 'bear', 'doggo',
  'clicky bone', 'new bone', 'harambe', 'squirrel', 'rope toy', 'chick head', 'teddy head', 'duck', 'green block', 'orange block']


#####################################Create Users, Profiles, and friendships

users = []
profs = []

USERIDS = users.pluck(:id)


100.times do |i|
  u = User.new(name: get_name, email: emails[i], password: password)
  u.avi = avi_array.sample
  u.cover_photo = cover_array.sample
  u.save
  Friend.seed_starter_friends(u.id)
  users << u

  prof = Profile.new(user_id: u.id, birthday: get_birthday, job_title: job_titles.sample, lives_in: get_lives_in, relationship_status: get_relationship_status,
    owners_names: get_owners_names, breed: get_breed, fav_toy: fav_toys.sample)
  prof.save
  profs << prof
end

PHRASES = [
  'I like to play with my ball',
  'Are we going to the park today',
  'BALL',
  'I SEE A SQUIRREL',
  'WHEN IS MASTER COMING HOME',
  'LETS PLAY',
  'WHOS GOING TO THE PARK TODAY',
  "I don't like the vet",
  'Yes, I drank out of the toilet. What do you mean? They go to the bathroom there?!',
  'Turn on Animal Planet? The Puppy Bowl is this Sunday!',
  "I don’t like the thunder! Stop laughing at me",
  'Yes, I played with the toilet paper.',
  'I smell bacon! I want bacon!!',
  'How would you feel if I put a cone on you and watched you walk into every wall?',
  "I’m thirsty and my bowl is downstairs. Help! I’m gonna die!",
  "There are so many people at this party and they keep touching me. I don’t know you. Stop that.",
  "This snow is getting stuck to my fur and I’m freezing my ass off.",
  "Where do you go all day and why do you leave the TV on? I don’t even like The View.",
  "There’s a stranger in the house. Alert! Alert!"
]

def dog_words(one_or_two)
  unless rand(one_or_two) == 1
    t = rand(8) + 5
    phrase = Faker::Dog.sound
    t.times { phrase += " #{Faker::Dog.sound}" }
    return phrase
  else
    return PHRASES.sample
  end
end

users.each do |user|
  Friend.seed_random_friends(user.id)


####################################Create a bunch of posts per user
  5.times do
    user.posts_made.create(wall_id: user.id, body: dog_words(2))
  end

  5.times do
    user.posts_made.create(wall_id: USERIDS.sample, body: dog_words(2))
  end

end

POSTIDS = Post.all.pluck(:id)

users.each do |user|
  10.times { user.comments.create(post_id: POSTIDS.sample, comment_text: dog_words(1)) }
end
