<h1>How to?</h1>

<div>
	<p>
		First you need to install surrealdb, follow this <a
			target="_blank"
			href="https://surrealdb.com/docs/start/installation">installation</a
		>.
	</p>
</div>

<div>
	<p>
		As of this writing, the way I am running my surrealdb locally is to execute this bash command
	</p>
	<pre class="mb-0">surreal start --log trace --user root --pass root memory</pre>
	<p class="mt-1">
		To explain above command, I am going to start my surrealdb using a <strong>username</strong> and
		<strong>password</strong> as <i class="badge rounded badge-accent">root</i>, at the same time to
		use machine's memory as the storage.
	</p>

	<div class="alert alert-warning italic text-sm">
		Using a memory based storage has its on caveat; once you stopped the script - all the schema /
		data be wiped out, the other way around is to use a file base, see below this paragraph.
	</div>

	<p class="mb-1">
		You can provide a file base using <i class="badge rounded badge-accent"
			>file://surreal-testing.db</i
		>, perhaps follow below command.
	</p>
	<pre
		class="mt-0">surreal start --log trace --user root --pass root file://surreal-testing.db</pre>
</div>
