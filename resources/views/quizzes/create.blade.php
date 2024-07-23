<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create quiz') }}
        </h2>
    </x-slot>

    @php
        $choices = old('choices', []);
        $choicesId = 2;
    @endphp
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="w-full mb-12 xl:mb-0 mx-auto">
            <div class="bg-white shadow-lg rounded p-4 pb-12">
                <form action="{{ route('quizzes.store') }}" method="POST">
                    @csrf
                    <div class="flex flex-col gap-4 mb-2">
                        <label for="title">
                            Titre / Question
                        </label>
                        <input type="text" id="title" name="title" value="{{ old('title') }}" required/>
                        @if($errors->has('title'))
                            <p class="text-red-500">{{ $errors->first('title') }}</p>
                        @endif
                    </div>

                    <div class="flex flex-col gap-4 mb-2 mt-4">
                        <label for="response">
                            Choix (Réponse)
                        </label>
                        <div class="flex flex-col md:flex-row-reverse gap-4 justify-between">
                            <button type="button" onclick="addChoice()"
                                    class="flex-none h-fit bg-gray-500 p-2 text-white active:bg-blue-600 text-xs font-bold uppercase rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                <i class="fa fa-plus mr-2"></i>
                                Ajouter un quiz
                            </button>

                            <div class="flex flex-col gap-3" id="choices">
                                @forelse($choices as $choice)
                                    @php
                                        $id = (int)$choice['id'] ?? 0;
                                        if ($id > $choicesId) {
                                            $choicesId = $id;
                                        }
                                    @endphp
                                    <div class="flex items-center gap-2" id="choices-{{ $id }}">
                                        <button type="button" onclick="deleteChoice(`{{ $id }}`)">
                                            <i class="fa fa-trash mr-1"></i>
                                        </button>

                                        <label>
                                            <input type="hidden" name="choices[{{ $id }}][id]"
                                                   value="{{ $id ?? '' }}" required/>
                                            <input type="text" name="choices[{{ $id }}][text]"
                                                   value="{{ $choice['text'] ?? '' }}" required/>
                                        </label>

                                        <input type="radio" class="rounded" id="response" name="response"
                                               @checked((string)old('response') === (string)$id) value="{{ $id }}" required/>
                                    </div>
                                @empty
                                    @php
                                        $id = 0;
                                    @endphp
                                    <div class="flex items-center gap-2" id="choices-{{ $id }}">
                                        <button type="button" onclick="deleteChoice({{ $id }})">
                                            <i class="fa fa-trash mr-1"></i>
                                        </button>

                                        <label>
                                            <input type="hidden" name="choices[{{ $id }}][id]" value="{{ $id }}"
                                                   required/>
                                            <input type="text" name="choices[{{ $id }}][text]" value="" required/>
                                        </label>

                                        <input type="radio" class="rounded" id="response" name="response"
                                               value="{{ $id }}" required/>
                                    </div>

                                    @php
                                        $id = 1;
                                    @endphp
                                    <div class="flex items-center gap-2" id="choices-{{ $id }}">
                                        <button type="button" onclick="deleteChoice({{ $id }})">
                                            <i class="fa fa-trash mr-1"></i>
                                        </button>
                                        <label>
                                            <input type="hidden" name="choices[{{ $id }}][id]" value="{{ $id }}"
                                                   required/>
                                            <input type="text" name="choices[{{ $id }}][text]" value="" required/>
                                        </label>
                                        <input type="radio" class="rounded" id="response" name="response"
                                               value="{{ $id }}" required/>
                                    </div>
                                @endforelse
                            </div>
                        </div>
                        @error('choices')
                        <p class="text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex flex-col gap-4 mb-2 mt-4">
                        <label for="course_id">
                            Cours
                        </label>
                        <select name="course_id" id="course_id" required>
                            <option value="" disabled @selected(!old('course_id'))>
                                Sélectionner un cours
                            </option>
                            @foreach($courses as $item)
                                <option value="{{ $item->id }}" @selected(old('course_id') === $item->id)>
                                    {{ $item->label }}
                                </option>
                            @endforeach
                        </select>
                        @error('course_id')
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
        let _id = {{ $choicesId }};

        function addChoice() {
            let _document = document.getElementById('choices');
            if (_document) {
                _id++;
                let _node = document.createElement('div');
                _node.setAttribute('class', 'flex items-center gap-2');
                _node.setAttribute('id', 'choices-' + _id);
                _node.innerHTML = `<button type="button" onclick="deleteChoice(${_id})">
                        <i class="fa fa-trash mr-1"></i>
                    </button>
                    <label>
                        <input type="hidden" name="choices[${_id}][id]" value="${_id}" required/>
                        <input type="text" name="choices[${_id}][text]" value="" required/>
                    </label>
                    <input type="radio" class="rounded" id="response" name="response" value="${_id}" required />`;

                _document.appendChild(_node);
            }
        }

        function deleteChoice(id) {
            let _choices = document.querySelectorAll('[id^="choices-"]');
            if (_choices.length > 2) {
                let _choice = document.getElementById('choices-' + id);
                if (_choice) {
                    _choice.remove();
                }
            } else {
                alert('Quiz required at least 2 choices');
            }
        }
    </script>
</x-app-layout>
