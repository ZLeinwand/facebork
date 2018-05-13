# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Profile.destroy_all

password = 'password'
names = ['emma', 'baxter', 'maisy']
email = ['emma@bork.com', 'baxter@hoplife.com', 'maisy@ardsley.com']

bob = User.create!(name: 'Bob Borker', email: 'demouser@facebork.com', password: password)
Profile.create(user_id: bob.id)

profiles = []

users = names.map.with_index do |name, idx|
  u = User.create!(name: name, email: email[idx], password: password)
  profiles << Profile.new(user_id: u.id)
end

bdays = ['November 5 2014', 'April 13 2012', 'August 15, 2000']
job_title = ['Queen', 'hopper', 'HouseBabe']
lives_in = ['Ossining', 'Spanish Harlem', 'The Great Farm In The Sky']
relationship_status = ['owned', 'free man', 'loved']
owners_names = ['Mike and Maria', 'Yolo Martinez', 'The Leinwands']
breed = ['Havanese', 'Eastern Cottontail', 'Cavalier King Charles Spaniel']
fav_toy = ['Bone', 'Paper Towel Roll', 'Bone']
descriptions = ['A Good Girle, the best girl, and angel from heaven. Queen of the andals, mother of dragons, breaker of chains', 'totally a dog a i swear (bamboozle acheived)', 'i liek turtals']


profiles.each_with_index do |profile, idx|
  profile.update!(birthday: bdays[idx], job_title: job_title[idx], lives_in: lives_in[idx], relationship_status: relationship_status[idx],
    owners_names: owners_names[idx], breed: breed[idx], fav_toy: fav_toy[idx], description: descriptions[idx])
end
