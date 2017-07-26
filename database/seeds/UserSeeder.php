<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Masterfile;
use App\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Masterfile::where('first_name', 'System')->first();
        $admin_role = Role::where('role_code', 'ADMIN')->first();

        $user = new User();
        $user->email = 'emurinyo@gmail.com';
        $user->password = bcrypt('pass123');
        $user->masterfile_id = $admin->id;
        $user->role_id = $admin_role->id;
        $user->save();
    }
}
