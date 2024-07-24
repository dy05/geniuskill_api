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
                        Title
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
                        Details
                    </p>
                    <p>
                        {!! $course->details !!}
                    </p>
                </div>

                <div class="flex flex-col gap-2 mb-5">
                    <p>
                        Description
                    </p>
                    <p>
                        {!! $course->description !!}
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

                <div class="flex flex-col gap-2 mb-5">
                    <p>
                        Video
                    </p>
                    <p>
                        {{ $course->video }}
                    </p>
                </div>

                <div class="flex flex-col gap-2 mb-5">
                    <h3>
                        Contenu
                    </h3>
                    <div class="flex flex-col gap-5">
                        @foreach($course->items as $item)
                            <div class="mt-4">
                                <div class="flex flex-col gap-2 mb-5">
                                    <p>
                                        Titre du chapitre
                                    </p>
                                    <div>
                                        <h2 class="font-semibold">
                                            {{ $item->title }}
                                        </h2>
                                    </div>
                                </div>
                                <br/>
                                <div class="flex flex-col gap-2 mb-5">
                                    <p>
                                        Contenu / Description
                                    </p>
                                    <div>
                                        {!! nl2br(e($item->description)) !!}
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2 mb-5">
                                    <p>
                                        Durée
                                    </p>
                                    <p>
                                        {{ $item->duration }} minutes
                                    </p>
                                </div>
                                <div class="flex flex-col gap-2 mb-5">
                                    <p>
                                        Ordre
                                    </p>
                                    <p>
                                        {{ $item->order }}
                                    </p>
                                </div>
                                <div class="flex flex-col gap-2 mb-5">
                                    <p>
                                        Video
                                    </p>
                                    <p>
                                        {{ $item->video }}
                                    </p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>

                <div class="flex flex-col gap-2 mb-5">
                    <div class="relative w-full px-2 max-w-full flex-grow flex flex-col md:flex-row gap-2 md:justify-between">
                        <h3>
                            Quizzes
                        </h3>

                        <a href="{{ route('quizzes.create') }}"
                           class="bg-blue-500 p-2 text-white active:bg-blue-600 text-xs font-bold uppercase rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            <i class="fa fa-plus mr-2"></i>
                            Ajouter un quiz
                        </a>
                    </div>

                    <div class="flex flex-col gap-5">
                        <div class="block w-full overflow-x-auto">
                            <table class="items-center bg-transparent w-full border-collapse">
                                <thead>
                                <tr>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Titre
                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Choix
                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Réponse
                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
                                </tr>
                                </thead>
                                <tbody>
                                @forelse($course->quizzes as $quiz)
                                    @php
                                        $response = null;
                                    @endphp
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            {{ $quiz->title }}
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                            @foreach(($quiz->choices ?? []) as $choice)
                                                @php
                                                    if ((string)$choice->id === (string)$quiz->response) {
                                                        $response = $choice->text;
                                                    }
                                                @endphp
                                                <p>
                                                    {{ $choice->text }}
                                                </p>
                                            @endforeach
                                        </td>
                                        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {{ $response }}
                                        </td>
                                        <td class="border-t-0 px-6 align-middle justify-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div class="flex gap-3 items-center justify-end w-full">
                                                <a class="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                                                   href="{{ route('quizzes.show', $quiz) }}">
                                                    <i class="fa fa-eye mr-1"></i>
                                                    Voir
                                                </a>
                                                <a class="bg-violet-500 hover:bg-violet-600 text-white p-2 rounded"
                                                   href="{{ route('quizzes.edit', $quiz) }}">
                                                    <i class="fa fa-pencil mr-1"></i>
                                                    Edit
                                                </a>
                                                <form class="inline-block" action="{{ route('quizzes.destroy', $quiz) }}"
                                                      method="POST"
                                                      onsubmit="return confirm('Voulez vous vraiment supprimer le quiz ?');">
                                                    @method('DELETE')
                                                    @csrf
                                                    <button
                                                        class="cursor-pointer bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                                                        type="submit">
                                                        <i class="fa fa-trash mr-1"></i>
                                                        Delete
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="100%" class="p-2">
                                            <p class="text-center">
                                                Aucun quiz trouvé
                                            </p>
                                        </td>
                                    </tr>
                                @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>
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
