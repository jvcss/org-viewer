<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/orgchart', function (Request $request) {
    return response()->json([
        "id" => "1",
        "name" => "CEO",
        "title" => "general manager",
        "children" => [
            ["id" => "2", "name" => "CTO", "title" => "department manager"],
        ],
    ]);
});
