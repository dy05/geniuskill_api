<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create level') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="w-full mb-12 xl:mb-0 mx-auto">
            <div class="bg-white shadow-lg rounded p-4 pb-12">
                <form action="{{ route('levels.store') }}" method="POST">
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

                    <div class="flex mt-5 w-full">
                        <button type="submit" class="bg-blue-500 hover:bg-bleu-600 text-white p-2 ml-auto rounded">
                            Creer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
