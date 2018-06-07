Rails.application.routes.draw do



  root "static_pages#root"


  namespace :api, defaults: { format: :json } do
    get "users/search", to: "users#search"
    get "users/requests", to: "users#get_friend_requests"
    delete "comments/:comment_id/likes", to: "comments#destroy_like"
    delete "posts/:post_id/likes", to: "posts#destroy_like"
    resources :users, only: [:update, :show, :create, :index]

    resources :profiles, only: [:show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index, :update, :destroy]
    resources :comments, only: [:create, :index, :update, :destroy]
    resources :likes, only: [:create]

    post "users/:id/friendships", to: "users#create_friendship"
    patch "users/:id/friendships", to: "users#update_friendship"
    delete "users/:id/friendships", to: "users#destroy_friendship"
    get "users/:id/friendships", to: "users#get_friends"


  end



end
