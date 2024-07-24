<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Update course') }}
        </h2>
    </x-slot>

    @php
        $itemsId = 1;
    @endphp
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

                    <div class="flex flex-col gap-4 mb-2 mt-4">
                        <div class="flex flex-col gap-3">
                            <div class="flex flex-col md:flex-row gap-4 justify-between">
                                <h3>
                                    Contenu (items)
                                </h3>

                                <button type="button" onclick="addItem()"
                                        class="flex-none h-fit bg-gray-500 p-2 text-white active:bg-blue-600 text-xs font-bold uppercase rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    <i class="fa fa-plus mr-2"></i>
                                    Ajouter un chapitre
                                </button>
                            </div>

                            <div class="flex flex-col gap-3 w-full divide-y divide-gray-400" id="items">
                                @forelse($course->items as $item)
                                    @php
                                        $id = (int)$item['id'] ?? 0;
                                        if ($id > $itemsId) {
                                            $itemsId = $id;
                                        }
                                    @endphp
                                    <div class="flex gap-2 items-baseline w-full" id="items-{{ $id }}">
                                        <div class="bg-gray-100 p-2 rounded flex-1">
                                            <div class="flex flex-col gap-2">
                                                <input type="hidden" name="items[{{ $id }}][id]"
                                                       value="{{ $id ?? '' }}" required/>
                                                <label for="items[{{ $id }}][title]">
                                                    Titre du chapitre
                                                </label>
                                                <input type="text" name="items[{{ $id }}][title]" id="items[{{ $id }}][title]"
                                                       value="{{ $item->title ?? '' }}" required/>
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="items[{{ $id }}][duration]">
                                                    Durée du chapitre
                                                    <span class="text-xs">(en minutes)</span>
                                                </label>
                                                <input type="number" name="items[{{ $id }}][duration]" id="items[{{ $id }}][duration]"
                                                       value="{{ $item->duration ?? '' }}" required/>
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="items[{{ $id }}][description]">
                                                    Contenu / Description du chapitre
                                                </label>
                                                <textarea name="items[{{ $id }}][description]" id="items[{{ $id }}][description]"
                                                          rows="4" required>{{ $item->description ?? '' }}</textarea>
                                            </div>

                                            <div class="flex flex-col gap-2">
                                                <label for="items[{{ $id }}][video]">
                                                    Lien video du chapitre
                                                    <span class="text-xs">(Lien video)</span>
                                                </label>
                                                <input type="text" name="items[{{ $id }}][video]" id="items[{{ $id }}][video]"
                                                       value="{{ $item->video ?? '' }}"/>
                                            </div>

                                            <div class="flex flex-col gap-2">
                                                <label for="items[{{ $id }}][order]">
                                                    Ordre du chapitre
                                                </label>
                                                <input type="number" name="items[{{ $id }}][order]" id="items[{{ $id }}][order]"
                                                       value="{{ $item->order ?? '' }}" />
                                            </div>
                                        </div>

                                        <button type="button" class="w-16 h-16" onclick="deleteItem(`{{ $id }}`)">
                                            <i class="fa fa-trash mr-1"></i>
                                        </button>
                                    </div>
                                @empty
                                    @php
                                        $id = 0;
                                    @endphp
                                    <div class="flex gap-2 items-baseline w-full" id="items-{{ $id }}">
                                        <div class="bg-gray-100 p-2 rounded flex-1">
                                            <div class="flex flex-col gap-2">
                                                <input type="hidden" name="items[{{ $id }}][id]"
                                                       value="{{ $id ?? '' }}" required/>
                                                <label for="items[{{ $id }}][title]">
                                                    Titre du chapitre
                                                </label>
                                                <input type="text" name="items[{{ $id }}][title]" id="items[{{ $id }}][title]"
                                                       value="{{ $item['title'] ?? '' }}" required/>
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="items[{{ $id }}][duration]">
                                                    Durée du chapitre
                                                    <span class="text-xs">(en minutes)</span>
                                                </label>
                                                <input type="number" name="items[{{ $id }}][duration]" id="items[{{ $id }}][duration]"
                                                       value="{{ $item['duration'] ?? '' }}" required/>
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="items[{{ $id }}][description]">
                                                    Contenu / Description du chapitre
                                                </label>
                                                <textarea name="items[{{ $id }}][description]" id="items[{{ $id }}][description]"
                                                          rows="4" required>{{ $item['description'] ?? '' }}</textarea>
                                            </div>

                                            <div class="flex flex-col gap-2">
                                                <label for="items[{{ $id }}][video]">
                                                    Lien video du chapitre
                                                    <span class="text-xs">(Lien video)</span>
                                                </label>
                                                <input type="text" name="items[{{ $id }}][video]" id="items[{{ $id }}][video]"
                                                       value="{{ $item['video'] ?? '' }}"/>
                                            </div>

                                            <div class="flex flex-col gap-2">
                                                <label for="items[{{ $id }}][order]">
                                                    Ordre du chapitre
                                                </label>
                                                <input type="number" name="items[{{ $id }}][order]" id="items[{{ $id }}][order]"
                                                       value="{{ $item['order'] ?? '' }}" />
                                            </div>
                                        </div>

                                        <button type="button" class="w-16 h-16" onclick="deleteItem(`{{ $id }}`)">
                                            <i class="fa fa-trash mr-1"></i>
                                        </button>
                                    </div>
                                @endforelse
                            </div>
                        </div>
                        @error('items')
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

    <script>
        let _id = {{ $itemsId }};

        function addItem() {
            let _document = document.getElementById('items');
            if (_document) {
                _id++;
                let _node = document.createElement('div');
                _node.setAttribute('class', 'flex items-center gap-2');
                _node.setAttribute('id', 'items-' + _id);
                _node.innerHTML = `<div class="flex gap-2 items-baseline w-full" id="items-${_id})">
                    <div class="bg-gray-100 p-2 rounded flex-1">
                        <div class="flex flex-col gap-2">
                            <input type="hidden" name="items[${_id})][id]"
                                   value="{{ $id ?? '' }}" required/>
                            <label for="items[${_id})][title]">
                                Titre du chapitre
                            </label>
                            <input type="text" name="items[${_id})][title]" id="items[${_id})][title]"
                                   value="" required/>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="items[${_id})][duration]">
                                Durée du chapitre
                                <span class="text-xs">(en minutes)</span>
                            </label>
                            <input type="number" name="items[${_id})][duration]" id="items[${_id})][duration]"
                                   value="" required/>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="items[${_id})][description]">
                                Contenu / Description du chapitre
                            </label>
                            <textarea name="items[${_id})][description]" id="items[${_id})][description]"
                                      rows="4" required></textarea>
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="items[${_id})][video]">
                                Lien video du chapitre
                                <span class="text-xs">(Lien video)</span>
                            </label>
                            <input type="text" name="items[${_id})][video]" id="items[${_id})][video]"
                                   value=""/>
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="items[${_id})][order]">
                                Ordre du chapitre
                            </label>
                            <input type="number" name="items[${_id})][order]" id="items[${_id})][order]"
                                   value="" />
                        </div>
                    </div>

                    <button type="button" class="w-16 h-16" onclick="deleteItem(${_id})">
                        <i class="fa fa-trash mr-1"></i>
                    </button>
                </div>`;
                _document.appendChild(_node);
            }
        }

        function deleteItem(id) {
            let _items = document.querySelectorAll('[id^="items-"]');
            if (_items.length > 1) {
                let _item = document.getElementById('items-' + id);
                if (_item) {
                    _item.remove();
                }
            } else {
                alert('Quiz required at least 1 item');
            }
        }
    </script>
</x-app-layout>
