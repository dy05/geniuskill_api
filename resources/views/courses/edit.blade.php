<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Update course') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="w-full mb-12 xl:mb-0 mx-auto">
            <div class="bg-white shadow-lg rounded p-4 pb-12">
                <form action="{{ route('courses.update', $course) }}" method="POST"
                      enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="flex flex-col gap-3 mb-5">
                        <label for="label">
                            Nom
                        </label>
                        <input type="text" id="label" name="label" value="{{ $course->label }}"/>
                        @if($errors->has('label'))
                            <p class="text-red-500">{{ $errors->first('label') }}</p>
                        @endif
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="slug">
                            Slug
                        </label>
                        <input type="text" id="slug" name="slug" value="{{ $course->slug }}"/>
                        @error('slug')
                        <p class="text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="subject_id">
                            Subject
                        </label>
                        <select name="subject_id" id="subject_id" required>
                            <option value="" disabled @selected(!$course->subject_id)>
                                Sélectionner un subject
                            </option>
                            @foreach($subjects as $item)
                                <option value="{{ $item->id }}" @selected($course->subject_id === $item->id)>
                                    {{ $item->label }}
                                </option>
                            @endforeach
                        </select>
                        @error('subject_id')
                        <p class="text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="level_id">
                            Level
                        </label>
                        <select name="level_id" id="level_id">
                            <option value="" disabled @selected(!$course->level_id)>
                                Sélectionner un level
                            </option>
                            @foreach($levels as $item)
                                <option value="{{ $item->id }}" @selected($course->level_id === $item->id)>
                                    {{ $item->label }}
                                </option>
                            @endforeach
                        </select>
                        @error('level_id')
                        <p class="text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex mt-5 w-full">
                        <button type="submit" class="bg-blue-500 hover:bg-bleu-600 text-white p-2 ml-auto rounded">
                            Modifier
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
