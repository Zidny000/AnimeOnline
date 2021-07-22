<?php

namespace Database\Factories;

use App\Models\Front;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\str;

class FrontFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \App\Models\Front::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
             'name' => 'Death Note',
            'image' => 'img/trending/trending-1.jpg',
            'rating' => 8,
            'category' => 'Live',
            'status' => 'Airing',
            'type' => 'Series',
            'comment_int' => 843,
            'watched_int' => 68716,
            'japaName' => 'Feito／sutei naito',
            'description' => 'Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother',
            'studios' => 'Lerche',
            'dateAired' => ' Oct 02, 2019 to ?',
            'gener' => 'Action, Adventure, Romance, Magic',
            'duration' => ' 24 min/ep',
            'quality' => 'HD'
        ];
    }
}
