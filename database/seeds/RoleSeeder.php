<?php

use Illuminate\Database\Seeder;
use App\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = new Role();
        $role->role_name = 'System Administrator';
        $role->role_code = 'ADMIN';
        $role->save();

        $role = new Role();
        $role->role_name = 'Merchant';
        $role->role_code = 'MCHT';
        $role->save();

        $role = new Role();
        $role->role_name = 'Customer';
        $role->role_code = 'CUST';
        $role->save();
    }
}
