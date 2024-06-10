<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'gender',
        'firstname',
        'lastname',
        'birth_date',
        'email',
        'password',
        'role',
    ];

    protected $appends = [
        'name',
        'age',
        'is_professor',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @return string|null
     */
    public function getAgeAttribute(): string|null
    {
        if (!$this->birth_date) {
            return null;
        }

        return date('Y') - date_create($this->birth_date)->format('Y');
    }

    /**
     * @return string
     */
    public function getNameAttribute(): string
    {
        return join(' ', [$this->lastname, $this->firstname]);
    }

    /**
     * @return bool
     */
    public function getIsProfessorAttribute(): bool
    {
        return $this->role === 'professor';
    }

    /**
     * @return HasMany
     */
    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class, 'user_id');
    }

    /**
     * @return BelongsToMany
     */
    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class, UserCourse::class);
    }

    /**
     * @return BelongsToMany
     */
    public function quizzes(): BelongsToMany
    {
        return $this->belongsToMany(Quiz::class, 'user_quizzes')
            ->withPivot([
                'choice',
                'status'
            ]);
    }

    /**
     * @return HasMany
     */
    public function quiz_answers(): HasMany
    {
        return $this->hasMany(UserQuiz::class, 'user_id');
    }

    /**
     * @return BelongsToMany
     */
    public function rewards(): BelongsToMany
    {
        return $this->belongsToMany(Reward::class)
            ->using(UserReward::class)
            ->withPivot(['meta']);
    }
}
