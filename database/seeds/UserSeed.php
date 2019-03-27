<?php

use Illuminate\Database\Seeder;

class UserSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            
            ['id' => 1, 'name' => 'Admin', 'email' => 'admin@admin.com', 'password' => '$2y$10$QB.Q4JhLSg.bqhk5cr6OAegXkqmyAS/7GrVhC19.oc.w1GMkoqv/W', 'remember_token' => '', 'approved' => 1,],

        ];

        foreach ($items as $item) {
            \App\User::create($item);
        }
    }
}
