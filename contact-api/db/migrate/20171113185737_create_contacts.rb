class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :phone
      t.string :tags
      t.string :picture
      t.boolean :favourite

      t.timestamps
    end
  end
end
