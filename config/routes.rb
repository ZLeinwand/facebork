Rails.application.routes.draw do


  root "static_pages#root"


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :destroy, :index]
    resource :session, only: [:create, :destroy]
  end



end
