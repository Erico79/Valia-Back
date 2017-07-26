<?php

use Illuminate\Database\Seeder;
use App\Masterfile;
use App\BusinessRole;

class MasterfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $br = BusinessRole::where('business_role_code', 'ADMIN')->first();

        $mf = new Masterfile();
        $mf->first_name = 'System';
        $mf->other_names = 'Administrator';
        $mf->mobile_no = '254718513948';
        $mf->business_role_id = $br->id;
        $mf->save();
    }
}
