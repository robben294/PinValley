Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:create, :update, :show, :index, :destroy]
    resources :only_boards, only: [:index]
    resources :pins, only: [:create, :update, :index, :show, :destroy]
    resources :pin_boards, only: [:create, :destroy, :show, :update]
    resources :feed, only: [:index]
    resources :more_feed, only: [:index]
    resources :user_follow, only: [:create, :destroy]
  end

  root "static_pages#root"
end
