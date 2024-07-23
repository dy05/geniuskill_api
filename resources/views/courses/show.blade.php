<x-app-layout>
    <x-slot name="header" class="w-full">
        <div class="flex gap-4 justify-between w-full">
            <div class="w-3/5">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    {{ __('Course') }} {{ $course->label }}
                </h2>
            </div>
            <div class="w-2/5 text-right">
                <a href="{{ route('courses.index') }}"
                   class="text-white p-2 rounded bg-blue-500 hover:bg-blue-600">
                    Voir tous les cours
                </a>
            </div>
        </div>
    </x-slot>

    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="w-full mb-12 xl:mb-0 mx-auto">
            <div class="bg-white shadow-lg rounded p-4 pb-12">
                <div class="flex flex-col gap-2 mb-5">
                    <p>
                        Nom
                    </p>
                    <p>
                        {{ $course->label }}
                    </p>
                </div>

                <div class="flex flex-col gap-2 mb-5">
                    <p>
                        Slug
                    </p>
                    <p>
                        {{ $course->slug }}
                    </p>
                </div>

                <div class="flex flex-col gap-3 mb-5">
                    <p>
                        Image
                    </p>
                    <p>
                        @if($course->image)
                            <img alt="image" class="bg-gray-300 rounded h-96 w-96 block"
                                 src="{{ $course->image }}"/>
                        @else
                            <span class="bg-gray-300 rounded h-96 w-96 block"></span>
                        @endif
                    </p>
                </div>

                <div class="flex flex-col gap-2 mb-5">
                    <p>
                        Subject
                    </p>
                    <p>
                        {{ optional($course->subject)->label ?? '' }}
                    </p>
                </div>

                <div class="flex flex-col gap-2 mb-5">
                    <p>
                        Level
                    </p>
                    <p>
                        {{ optional($course->level)->label ?? '' }}
                    </p>
                </div>

                <div class="flex gap-3 items-baseline">
                    <a class="bg-violet-500 h-fit hover:bg-violet-600 text-white p-2 rounded"
                       href="{{ route('courses.edit', $course) }}">
                        <i class="fa fa-pencil mr-1"></i>
                        Edit
                    </a>
                    <form action="{{ route('courses.destroy', $course) }}" method="POST" class="inline-block"
                          onsubmit="return confirm('Voulez vous vraiment supprimer ce cours ?');">
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
    </div>
</x-app-layout>
