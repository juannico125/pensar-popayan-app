-- 014 · La regla de «no nombrar letras» deja de rechazar español legítimo
--
-- La restricción impide que una explicación diga «la opción B», porque con el
-- barajado por estudiante esa frase es falsa para media clase. Estaba escrita
-- sin distinguir mayúsculas, y en español «la respuesta a una pregunta» encaja
-- con el patrón: «respuesta» + espacio + «a». Rechazaba una frase perfectamente
-- normal.
--
-- Ahora la letra tiene que ir en MAYÚSCULA, que es como aparece en el
-- cuadernillo y como la escribiría alguien al referirse a una opción. Los
-- artículos y preposiciones en minúscula («a», «o») dejan de disparar la regla,
-- y «la opción A», «la alternativa C» siguen bloqueadas.

alter table public.preguntas_clave drop constraint preguntas_clave_explicacion_check;

alter table public.preguntas_clave add constraint preguntas_clave_explicacion_check
  check (
    length(btrim(explicacion)) > 10
    -- Sin `*`: el nombre del sustantivo puede ir en cualquier caso, la letra no.
    and explicacion !~ '\m([Oo]pci[oó]n|[Ll]iteral|[Aa]lternativa|[Rr]espuesta)\s+["“'']?[ABCD]\M'
  );
