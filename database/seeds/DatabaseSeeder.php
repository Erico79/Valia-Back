<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call(BusinessRoleSeeder::class);
         $this->call(MasterfileSeeder::class);
         $this->call(RoleSeeder::class);
         $this->call(UserSeeder::class);
    }
}
