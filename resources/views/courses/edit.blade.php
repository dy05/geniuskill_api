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
                        <label for="video">
                            Lien video
                        </label>
                        <input type="text" id="video" name="video" value="{{ $course->video }}"/>
                        @error('video')
                        <p class="text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="objectifs">
                            Objectifs
                        </label>
                        <textarea type="text" id="objectifs" name="objectifs">{{ $course->objectifs }}</textarea>
                        @if($errors->has('objectifs'))
                            <p class="text-red-500">{{ $errors->first('objectifs') }}</p>
                        @endif
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="details">
                            Details
                        </label>
                        <textarea type="text" id="details" name="details">{{ $course->details }}</textarea>
                        @if($errors->has('details'))
                            <p class="text-red-500">{{ $errors->first('details') }}</p>
                        @endif
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="description">
                            Slug
                        </label>
                        <textarea type="text" id="description" name="description">{{ $course->description }}</textarea>
                        @error('description')
                        <p class="text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex flex-col gap-3 mb-5">
                        <label for="image">
                            Image
                        </label>
                        <div class="flex flex-row gap-2">
                            <div class="rounded h-96 w-96 relative" id="imageContainer">
                                <button type="button" class="bg-transparent block border-none p-0 z-50 absolute right-2"
                                        onclick="showDefaultImage()">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#CCCCCC" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                                <img alt="{{ $course->label }}" class="w-full h-fit block object-contain rounded" src="{{ $course->image }}" />
                                <div class="w-full h-full block hidden" style="background-repeat: no-repeat; background-position: top; background-size: contain !important;"></div>
                                <span class="bg-gray-300 w-full h-full block hidden" style="background: url({{ asset('images/book.png') }}) no-repeat top; background-size: contain !important;"></span>
                            </div>

                            <label class="hidden">
                                <input type="hidden" id="imageInput" name="imageInput" value="{{ $course->image }}"/>
                            </label>
                            <input type="file" id="image" name="image" value="{{ old('image') }}"
                                   accept=".gif,.jpg,.jpeg,.png"
                                   onchange="readURL(this);"/>
                        </div>
                        @error('image')
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

    <script>
        let _imageContainer = null;

        window.addEventListener('load', () => {
            _imageContainer = document.getElementById('imageContainer');
        });

        function readURL(input) {
            if (_imageContainer && input.files && input.files[0]) {
                let _div = _imageContainer.querySelector('div');
                if (_div) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        _div.style.backgroundImage = "url('" + e.target.result + "')";
                    };
                    reader.readAsDataURL(input.files[0]);
                    removeDefaultImage();
                }
            }
        }

        function removeDefaultImage() {
            if (_imageContainer) {
                let _span = _imageContainer.querySelector('span');
                if (_span && !_span.classList.contains('hidden')) {
                    _span.classList.add('hidden');
                }

                let _img = _imageContainer.querySelector('img');
                if (_img && !_img.classList.contains('hidden')) {
                    _img.classList.add('hidden');
                }

                let _button = _imageContainer.querySelector('button');
                if (_button && _button.classList.contains('hidden')) {
                    _button.classList.remove('hidden');
                }

                let _div = _imageContainer.querySelector('div');
                if (_div && _div.classList.contains('hidden')) {
                    _div.classList.remove('hidden');
                }
            }
        }

        function showDefaultImage() {
            let _imageInput = document.querySelector('input[name="imageInput"]');

            if (_imageInput) {
                _imageInput.value = null;
            }

            let _inputFile = document.querySelector('input[type="file"]');

            if (_inputFile) {
                _inputFile.value = null;

                if (_imageContainer) {
                    let _img = _imageContainer.querySelector('img');
                    if (_img && !_img.classList.contains('hidden')) {
                        _img.classList.add('hidden');
                    }

                    let _div = _imageContainer.querySelector('div');
                    if (_div && !_div.classList.contains('hidden')) {
                        _div.classList.add('hidden');
                    }

                    let _button = _imageContainer.querySelector('button');
                    if (_button && !_button.classList.contains('hidden')) {
                        _button.classList.add('hidden');
                    }

                    let _span = _imageContainer.querySelector('span');
                    if (_span && _span.classList.contains('hidden')) {
                        _span.classList.remove('hidden');
                    }
                }
            }
        }
    </script>
</x-app-layout>
