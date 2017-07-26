<?php

use Illuminate\Database\Seeder;
use App\BusinessRole as Br;

class BusinessRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $br = new Br();
        $br->business_role_name = 'Merchant';
        $br->business_role_code = 'MCHT';
        $br->save();

        $br = new Br();
        $br->business_role_name = 'Customer';
        $br->business_role_code = 'CUST';
        $br->save();

        $br = new Br();
        $br->business_role_name = 'Administrator';
        $br->business_role_code = 'ADMIN';
        $br->save();
    }
}
