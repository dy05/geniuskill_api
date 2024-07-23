<x-app-layout>
    <x-slot name="header" class="w-full">
        <div class="flex gap-4 justify-between w-full">
            <div class="w-3/5">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    {{ __('Level') }} {{ $course->label }}
                </h2>
            </div>
            <div class="w-2/5 text-right">
                <a href="{{ route('levels.index') }}"
                   class="text-white p-2 rounded bg-blue-500 hover:bg-blue-600">
                    Voir toutes les levels
                </a>
            </div>
        </div>
    </x-slot>

    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="w-full mb-12 xl:mb-0 mx-auto">
            <div class="bg-white shadow-lg rounded p-4 pb-12">
                <div class="flex flex-col gap-2 mb-4">
                    <p>
                        Nom
                    </p>
                    <p>
                        {{ $course->label }}
                    </p>
                </div>

                <div class="flex flex-col gap-2 mb-4">
                    <p>
                        Slug
                    </p>
                    <p>
                        {{ $course->slug }}
                    </p>
                </div>

                <form action="{{ route('levels.destroy', $course) }}" method="POST"
                      onsubmit="return confirm('Voulez vous vraiment supprimer ce level ?');">
                    @csrf
                    @method('DELETE')
                    <div class="flex mt-5 w-full">
                        <button type="submit" class="bg-red-500 hover:bg-red-600 text-white p-2 ml-auto rounded">
                            Supprimer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
