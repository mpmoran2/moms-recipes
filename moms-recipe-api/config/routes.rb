Rails.application.routes.draw do
  resources :users
  resources :categories, only: :index
  resources :recipes, only: [:index, :create] 
  resources :ingredients, only: [:index, :create]  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
