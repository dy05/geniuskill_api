<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create course') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="w-full mb-12 xl:mb-0 mx-auto">
            <div class="bg-white shadow-lg rounded p-4 pb-12">
                <form action="{{ route('courses.store') }}" method="POST"
                      enctype="multipart/form-data">
                    @csrf
                    <div class="flex flex-col gap-3 mb-5">
                        <label for="label">
                            Nom
                        </label>
                        <input type="text" id="label" name="label" value="{{ old('label') }}" required/>
                        @if($errors->has('label'))
                            <p class="text-red-500">{{ $errors->first('label') }}</p>
                        @endif
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="slug">
                            Slug
                        </label>
                        <input type="text" id="slug" name="slug" value="{{ old('slug') }}"/>
                        @error('slug')
                        <p class="text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="image">
                            Image
                        </label>
                        <div class="flex">
                            <div class="rounded h-96 w-96" id="imageContainer">
                                <span class="bg-gray-300 w-full h-full block"></span>
                            </div>
                        </div>
                        <input type="file" id="image" name="image" value="{{ old('image') }}"
                               onchange="readURL(this);"/>
                        @error('image')
                        <p class="text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="subject_id">
                            Subject
                        </label>
                        <select name="subject_id" id="subject_id" required>
                            <option value="" disabled @selected(!old('subject_id'))>
                                Sélectionner un subject
                            </option>
                            @foreach($subjects as $item)
                                <option value="{{ $item->id }}" @selected(old('subject_id') === $item->id)>
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
                            <option value="" disabled @selected(!old('level_id'))>
                                Sélectionner un level
                            </option>
                            @foreach($levels as $item)
                                <option value="{{ $item->id }}" @selected(old('level_id') === $item->id)>
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
                            Creer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script>
        function readURL(input) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    const _imageContainer = document.getElementById('imageContainer');
                    if (_imageContainer) {
                        _imageContainer.style.backgroundImage = "url('" + e.target.result + "')";
                    }
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>
</x-app-layout>
