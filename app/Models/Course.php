<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'label',
        'slug',
        'level_id',
        'subject_id',
        'image',
        'description',
        'objectifs',
        'details',
    ];

    protected $with = [
        'level',
        'subject',
    ];

    protected $appends = [
        'duration',
    ];

    /**
     * @return BelongsTo
     */
    public function level(): BelongsTo
    {
        return $this->belongsTo(Level::class, 'level_id');
    }

    /**
     * @return BelongsTo
     */
    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }

    /**
     * @return HasMany
     */
    public function favorites(): HasMany
    {
        return $this->hasMany(UserFavorite::class, 'course_id');
    }

    /**
     * @return HasMany
     */
    public function quizzes(): HasMany
    {
        return $this->hasMany(Quiz::class, 'course_id');
    }

    /**
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(CourseItem::class, 'course_id')
            ->orderBy('order');
    }

    /**
     * @return BelongsToMany
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->using(UserCourse::class);
    }

    /**
     * @return string
     */
    public function getImageAttribute(): string
    {
        $image = $this->attributes['image'] ?? null;
        if (!$image) {
            return asset('images/book.png');
        }

        return asset($image);
    }

    /**
     * @return string
     */
    public function getDurationAttribute(): string
    {
        return $this->items()->sum('duration');
    }
}
